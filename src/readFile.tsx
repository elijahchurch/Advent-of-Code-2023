import { open } from "node:fs/promises";
import fs from "fs";

const readFileIntoStringArray = async (path: string): Promise<string[]> => {
    const file = await open(path);
    const lines: string[] = [];
    for await(const line of file.readLines()) {
        lines.push(line);
    }

    return lines;
};