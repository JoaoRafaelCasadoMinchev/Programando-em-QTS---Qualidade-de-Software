/* import { assertEquals, assertStringIncludes, assertArrayIncludes, } from "https://deno.land/std/testing/asserts.ts" */
import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts" 

//AssertEquals
Deno.test("Olá Amigos a = 10", () => {
    const a = 20/2
    assertEquals(a, 10)
})

//AssertStringIncludes
Deno.test("Teste Assert String", () => {
    assertStringIncludes("Hello World", "Hello")
})

//AssertArrayIncludes
Deno.test("Teste Assert Array", () => {
    assertArrayIncludes([1, 2, 3], [1])
    assertArrayIncludes([1, 2, 3], [1, 2])
    assertArrayIncludes(Array.from("Hello World"), Array.from("Hello"))
})
