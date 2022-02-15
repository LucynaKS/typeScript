import { readFileSync } from "fs";

export function prepareData(filePath: string, encoding: BufferEncoding) {
  return readFileSync(filePath, encoding).split("\r\n").map(Number);
}
