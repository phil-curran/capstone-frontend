import getTodayFormattedDate from "../../utilities/getTodayFormattedDate";

const BASE_URL = "http://localhost:3000/api/checklists";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxZTBmMzlhMmQ2MTI2OWY0ZjY1YjQiLCJpYXQiOjE3MTE0MDIyMTYsImV4cCI6MTcxMTY2MTQxNn0.52_YiiE1ho6e3athdQBLexPOT0_y1Yfu3Mc15W87XJY";

export const createChecklist = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({
        entryDateString: getTodayFormattedDate().entryDateString,
        task1: 0,
        task2: 0,
        task3: 0,
        task4: 0,
        task5: 0,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create checklist");
    }
  } catch (error) {
    console.error("Error creating checklist:", error.message);
    throw error;
  }
};

export const fetchChecklist = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch checklist");
    }

    const json = await response.json();
    // Get today's formatted date
    const now = getTodayFormattedDate();

    // Filter checklist for today's date
    const todayData = json.filter(
      (item) => item.entryDateString === now.entryDateString
    );

    // Calculate historical data for graph
    const graphData = json.map((obj) => {
      const sum = Object.entries(obj)
        .filter(([key]) => key.startsWith("task"))
        .reduce((acc, [, value]) => acc + value, 0);
      return { name: obj.entryDateString, score: sum, pv: 10 };
    });

    return { checklist: now, json, todayData, graphData };
  } catch (error) {
    console.error("Error fetching checklist:", error.message);
    throw error;
  }
};

export const updateChecklist = async (updatedChecklist) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify(updatedChecklist),
    });

    if (!response.ok) {
      throw new Error("Failed to update checklist");
    }
  } catch (error) {
    console.error("Error updating checklist:", error.message);
    throw error;
  }
};
