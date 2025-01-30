const apiUrl = "http://localhost:3000/user/";

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
    const [userRes, activityRes, averageSessionsRes, performanceRes] = await Promise.all([
      fetch(`${apiUrl}${userId}`),
      fetch(`${apiUrl}${userId}/activity`),
      fetch(`${apiUrl}${userId}/average-sessions`),
      fetch(`${apiUrl}${userId}/performance`),
    ]);

    if (!userRes.ok || !activityRes.ok || !averageSessionsRes.ok || !performanceRes.ok) {
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
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}


