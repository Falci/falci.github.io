#!/bin/bash

pandoc "./cv.md" -o "../../public/download/cv.pdf" --pdf-engine=typst -V margin-x=2cm -V margin-y=2cm

cp ./cv.md ../../public/llms.txt
cp ./cv.md ../../public/download/cv.md
