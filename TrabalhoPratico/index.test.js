/* import { assertEquals, assertStringIncludes, assertArrayIncludes, } from "https://deno.land/std/testing/asserts.ts" */
import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts" 

//AssertEquals
Deno.test("Assert Equals a = 10", () => {
    const a = 20/2
    assertEquals(a, 10)
})

//AssertStringIncludes
Deno.test("Assert String", () => {
    assertStringIncludes("Salve Manos", "Salve")
})

//AssertArrayIncludes
Deno.test("Assert Array", () => {
    assertArrayIncludes([1, 2, 3], [1])
    assertArrayIncludes([1, 2, 3], [1, 2])
    assertArrayIncludes(Array.from("Salve Manos"), Array.from("Salve"))
})
