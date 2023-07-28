//Pages Test
/////////////////////////////
'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//1.関数 sayHelloToFriends を宣言してください。------------------------------------------------------

     /**
    * @param {Array<string>} friends - 友達の名前が入った配列
    * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
    */
   // ここにコードを書きましょう
   function sayHelloToFriends(friends) {
    const greetings = []; //配列を宣言 結果の初期化
    for (let i = 0; i < friends.length; i++) {
      const greeting = "Hello, " + friends[i] + "!";
      greetings.push(greeting);
    }
    return greetings;
  }

  const friends = ["Mario", "Luigi"];
  //console.log(sayHelloToFriends(friends))
  test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);
