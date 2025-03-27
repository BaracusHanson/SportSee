const apiUrl = "http://localhost:3000/user/ds";


/**
 * Fetches user data from the API and combines it into a single object.
 *
 * @param {string} userId - The ID of the user to fetch data for.
 * @returns {Promise<Object>} A promise that resolves to an object containing the combined user data.
 * @throws {Error} Throws an error if the network response is not ok or if there is a problem with the fetch operation.
 *
 * @property {Object} userInfos - The user's information.
 * @property {number} todayScore - The user's score for today.
 * @property {Object} keyData - The user's key data.
 * @property {Array} activity - The user's activity sessions.
 * @property {Array} averageSessions - The user's average sessions.
 * @property {Object} performance - The user's performance data.
 * @property {Object} performance.kind - The kind of performance data.
 * @property {Array} performance.data - The performance data.
 */
export async function fetchUserData(userId) {
  try {
    const [userRes, activityRes, averageSessionsRes, performanceRes] =
      await Promise.all([
        fetch(`${apiUrl}${userId}`),
        fetch(`${apiUrl}${userId}/activity`),
        fetch(`${apiUrl}${userId}/average-sessions`),
        fetch(`${apiUrl}${userId}/performance`),
      ]);

    if (
      !userRes.ok ||
      !activityRes.ok ||
      !averageSessionsRes.ok ||
      !performanceRes.ok
    ) {
      throw new Error("Network response was not ok");
    }

    const [user, activity, averageSessions, performance] = await Promise.all([
      userRes.json(),
      activityRes.json(),
      averageSessionsRes.json(),
      performanceRes.json(),
    ]);

    const combinedData = {
      userInfos: user.data.userInfos,
      todayScore: user.data.todayScore || user.data.score,
      keyData: user.data.keyData,
      activity: activity.data.sessions,
      averageSessions: averageSessions.data.sessions,
      performance: {
        kind: performance.data.kind,
        data: performance.data.data,
      },
    };
    return combinedData;
  } catch (error) {
    console.error("Probleme lors de la recuperation de données:", error);
    throw error;
  }
}

export async function fetchUserDataFromMock(userId) {
  try {
    // Récupération du fichier JSON depuis le dossier public
    const response = await fetch('./DataMock.json');

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données depuis DataMock.json');
    } 

    const data = await response.json();

    // Trouver l'utilisateur spécifique à partir de l'ID
    const user = data.USER_MAIN_DATA.find((user) => user.id === userId);
    const activity = data.USER_ACTIVITY.find((activity) => activity.userId === userId);
    const averageSessions = data.USER_AVERAGE_SESSIONS.find((session) => session.userId === userId);
    const performance = data.USER_PERFORMANCE.find((performance) => performance.userId === userId);

    if (!user || !activity || !averageSessions || !performance) {
      throw new Error('Les données pour cet utilisateur sont introuvables.');
    }

    // Combinaison des données dans un seul objet
    const combinedData = {
      userInfos: user.userInfos,
      todayScore: user.todayScore || user.score,
      keyData: user.keyData,
      activity: activity.sessions,
      averageSessions: averageSessions.sessions,
      performance: {
        kind: performance.kind,
        data: performance.data,
      },
    };

    return combinedData;
  } catch (error) {
    console.error("Problème lors de la récupération des données depuis DataMock.json:", error);
    throw error;
  }
}
