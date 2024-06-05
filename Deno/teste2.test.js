/* import { assertEquals, assertStringIncludes, assertArrayIncludes, } from "https://deno.land/std/testing/asserts.ts" */

import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts" 


let a = "Oi";
let b = "Olá";

Deno.test("É oi", () => {
    assertEquals(a, "Oi")
})
Deno.test("É olá", () => {
    assertEquals(b, "Olá")
})
