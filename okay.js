#!/usr/bin/env node

import {green} from "ansis"

if (process.env.TELL_OKAY === "0") {
  process.exit(0)
}

console.log(green`Okay`)
