// mm-states.js
import { listStates, listTownships } from "@tm11/mmgeo";

export function getAllStates() {
  return listStates().map((state, index) => ({
    id: String(index + 1),
    ...state,
  }));
}

export function getStateById(id) {
  const states = getAllStates();
  return states.find((s) => s.id === id);
}

export function getTownshipsByStateId(id) {
  const state = getStateById(id);
  if (!state) return [];
  // Fetches townships using the state's slug
  return listTownships(state.slug, "");
}

export function getTownshipsByStateName(name) {
  const states = listStates();
  const matched = states.find((s) => s.en.toLowerCase() === name.toLowerCase());
  if (!matched) return [];
  return listTownships(matched.slug, "");
}
