Word & Line Counter CLI
A simple Node.js command-line application that reads a text file and counts the number of lines, words, and characters.

Requirements
Node.js
npm

Usage
Run the program using:
npm start sample.txt

The program will display:
File: sample.txt
Lines: 4
Words: 148
Characters: 902

Features
Reads the filename from process.argv
Reads files using fs/promises
Counts lines
Counts words
Counts characters
Handles missing filenames
Handles files that cannot be read
Uses ES modules

Project Structure
word-counter/
├── index.js
├── sample.txt
├── package.json
├── package-lock.json
└── README.md