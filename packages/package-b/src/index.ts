import { packageA } from "package-a/src"

export const packageB = () => console.log("package b")
packageA()
packageB()
