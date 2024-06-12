/* import { assertEquals, assertStringIncludes, assertArrayIncludes, } from "https://deno.land/std/testing/asserts.ts" */
import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts" 

//AssertEquals
Deno.test("Hello World x=3", () => {
    const x=1+2
    assertEquals(x, 3)
})

//AssertStringIncludes
Deno.test("Teste Assert String", () => {
    assertStringIncludes("Hello World", "Hello");
});

//AssertArrayIncludes
Deno.test("Teste Assert Array", () => {
    assertArrayIncludes([1, 2, 3], [1])
    assertArrayIncludes([1, 2, 3], [1, 2])
    assertArrayIncludes(Array.from("Hello World"), Array.from("Hello"))
});