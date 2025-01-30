const apiUrl = "http://localhost:3000/user/";

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


