export function calculateEnglishLevel(currentLevel) {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const baseLevel = "B1";
    return levels.indexOf(currentLevel) > levels.indexOf(baseLevel) ? currentLevel : baseLevel;
}
