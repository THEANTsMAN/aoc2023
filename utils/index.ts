import fs from "fs"

export const importFileByLines = async (filename: string) => {
  const lines = fs.readFileSync(filename).toString().split("\n");

  return lines;
};