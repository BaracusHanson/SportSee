export async function fetchUserData(userId) {
  try {
    const response = await fetch(`/src/utils/datas.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const userData = reorganizeDataByUserId(data);
    return userData[userId] || null;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export function reorganizeDataByUserId(data) {
  const organizedData = {};

  // Regrouper les données principales par userId
  if (data.USER_MAIN_DATA) {
    data.USER_MAIN_DATA.forEach((user) => {
      const userId = user.id;
      organizedData[userId] = {
        userInfos: user.userInfos,
        todayScore: user.todayScore || user.score,
        keyData: user.keyData,
      };
    });
  }

  // Ajouter l'activité des utilisateurs
  if (data.USER_ACTIVITY) {
    data.USER_ACTIVITY.forEach((activity) => {
      const userId = activity.userId;
      if (organizedData[userId]) {
        organizedData[userId].activity = activity.sessions;
      }
    });
  }

  // Ajouter les sessions moyennes des utilisateurs
  if (data.USER_AVERAGE_SESSIONS) {
    data.USER_AVERAGE_SESSIONS.forEach((session) => {
      const userId = session.userId;
      if (organizedData[userId]) {
        organizedData[userId].averageSessions = session.sessions;
      }
    });
  }

  // Ajouter la performance des utilisateurs
  if (data.USER_PERFORMANCE) {
    data.USER_PERFORMANCE.forEach((performance) => {
      const userId = performance.userId;
      if (organizedData[userId]) {
        organizedData[userId].performance = {
          kind: performance.kind,
          data: performance.data,
        };
      }
    });
  }

  return organizedData;
}
