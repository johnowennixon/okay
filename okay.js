#!/usr/bin/env node

const {green} = require("ansis")

if (process.env.TELL_OKAY === "0") {
  process.exit(0)
}

console.log(green`Okay`)
