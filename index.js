import { unified } from "unified";
import markdown from "remark-parse";
import docx from "remark-docx";
import fs from 'fs'
import path from "path";

const processor = unified().use(markdown).use(docx, {output: "buffer"});

const text = fs.readFileSync(
    path.resolve('test.md')
);

console.log(text)