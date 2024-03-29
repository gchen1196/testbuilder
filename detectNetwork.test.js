/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    // throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num%2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901235') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  // it('has a prefix of 51 and a length of 16', function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });
 
  // it('has a prefix of 52 and a length of 16', function() {
  //   expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  // });
 
  // it('has a prefix of 53 and a length of 16', function() {
  //   expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  // });

  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(parseInt(prefix) + '12342341345321')).to.equal('MasterCard');
      })
    })(prefix)
  }

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  // it('has a prefix of 54 and a length of 16', function() {
  //   expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  // });
 
  // it('has a prefix of 55 and a length of 16', function() {
  //   expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  // })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert; 

  it('has a prefix of 6011 and a length of 16', function(){
    assert(detectNetwork('6011345790234573') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011321567754346784') === 'Discover');
  });
  // it('has a prefix of 644 and a length of 16', function() {
  //   assert(detectNetwork('6441111111111111') === 'Discover');
  // });
  // it('has a prefix of 644 and a length of 19', function() {
  //   assert(detectNetwork('6441111111111111111') === 'Discover');
  // });
  // it('has a prefix of 645 and a length of 16', function() {
  //   assert(detectNetwork('6451111111111111') === 'Discover');
  // });
  // it('has a prefix of 646 and a length of 16', function() {
  //   assert(detectNetwork('6461111111111111') === 'Discover');
  // });
  // it('has a prefix of 647 and a length of 16', function() {
  //   assert(detectNetwork('6471111111111111') === 'Discover');
  // });
  // it('has a prefix of 648 and a length of 16', function() {
  //   assert(detectNetwork('6481111111111111') === 'Discover');
  // });
  // it('has a prefix of 649 and a length of 16', function() {
  //   assert(detectNetwork('6491111111111111') === 'Discover');
  // });
  // it('has a prefix of 645 and a length of 19', function() {
  //   assert(detectNetwork('6451111111111111111') === 'Discover');
  // });
  // it('has a prefix of 646 and a length of 19', function() {
  //   assert(detectNetwork('6461111111111111111') === 'Discover');
  // });
  // it('has a prefix of 647 and a length of 19', function() {
  //   assert(detectNetwork('6471111111111111111') === 'Discover');
  // });
  // it('has a prefix of 648 and a length of 19', function() {
  //   assert(detectNetwork('6481111111111111111') === 'Discover');
  // });
  // it('has a prefix of 649 and a length of 19', function() {
  //   assert(detectNetwork('6491111111111111111') === 'Discover');
  // });
  for (var prefix = 644; prefix <= 649; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(parseInt(prefix) + '1232123453213') === 'Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(parseInt(prefix) + '3452345332355321') === 'Discover');
      });
    })(prefix)
  }

  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6573234589023457') === 'Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6573234589023457643') === 'Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  //
  var assert = chai.assert;

  var input = '501865476543';
  for(var length = 12; length <= 19; length++){
    (function(length, input){
      it('has a prefix of 5018 and a length of ' + length, function() {
        assert(detectNetwork(input) === 'Maestro');
      })
    })(length, input);
    input += '0';
  }

  var input = '502023543231';
  for(var length = 12; length <= 19; length++) {
    (function(length, input){
      it('has a prefix of 5020 and a length of ' + length, function() {
        assert(detectNetwork(input) === 'Maestro');
      })
    })(length, input);
    input += '0';
  }

  var input = '503823543231';
  for(var length = 12; length <= 19; length++) {
    (function(length, input){
      it('has a prefix of 5038 and a length of ' + length, function() {
        assert(detectNetwork(input) === 'Maestro');
      })
    })(length, input);
    input += '0';
  }

  var input = '630423543231';
  for(var length = 12; length <= 19; length++) {
    (function(length, input){
      it('has a prefix of 6304 and a length of ' + length, function() {
        assert(detectNetwork(input) === 'Maestro');
      })
    })(length, input);
    input += '0';
  }
  // it('has a prefix of 5018 and a length of 12', function(){
  //   assert(detectNetwork('501823453212') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 13', function(){
  //   assert(detectNetwork('5018234532121') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 14', function(){
  //   assert(detectNetwork('50182345321243') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 15', function(){
  //   assert(detectNetwork('501823453212432') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 16', function(){
  //   assert(detectNetwork('5018234532124325') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 17', function(){
  //   assert(detectNetwork('50182345321243253') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 18', function(){
  //   assert(detectNetwork('501823453212432539') === 'Maestro');
  // });
  // it('has a prefix of 5018 and a length of 19', function(){
  //   assert(detectNetwork('5018234532124325393') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 12', function(){
  //   assert(detectNetwork('502023453212') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 13', function(){
  //   assert(detectNetwork('5020234532121') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 14', function(){
  //   assert(detectNetwork('50202345321243') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 15', function(){
  //   assert(detectNetwork('502023453212432') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 16', function(){
  //   assert(detectNetwork('5020234532124325') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 17', function(){
  //   assert(detectNetwork('50182345321243253') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 18', function(){
  //   assert(detectNetwork('502023453212432539') === 'Maestro');
  // });
  // it('has a prefix of 5020 and a length of 19', function(){
  //   assert(detectNetwork('5020234532124325393') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 12', function(){
  //   assert(detectNetwork('503823453212') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 13', function(){
  //   assert(detectNetwork('5038234532121') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 14', function(){
  //   assert(detectNetwork('50382345321243') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 15', function(){
  //   assert(detectNetwork('503823453212432') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 16', function(){
  //   assert(detectNetwork('5038234532124325') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 17', function(){
  //   assert(detectNetwork('50382345321243253') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 18', function(){
  //   assert(detectNetwork('503823453212432539') === 'Maestro');
  // });
  // it('has a prefix of 5038 and a length of 19', function(){
  //   assert(detectNetwork('5038234532124325393') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 12', function(){
  //   assert(detectNetwork('630423453212') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 13', function(){
  //   assert(detectNetwork('6304234532121') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 14', function(){
  //   assert(detectNetwork('63042345321243') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 15', function(){
  //   assert(detectNetwork('630423453212432') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 16', function(){
  //   assert(detectNetwork('6304234532124325') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 17', function(){
  //   assert(detectNetwork('63042345321243253') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 18', function(){
  //   assert(detectNetwork('630423453212432539') === 'Maestro');
  // });
  // it('has a prefix of 6304 and a length of 19', function(){
  //   assert(detectNetwork('6304234532124325393') === 'Maestro');
  // });

});

describe('China UnionPay', function() {

  var assert = chai.assert;
  //start with length 16
  //go through each prefix combo with 16 digits
  //after looping through 16 digit combos 
  //go to 17 digits by adding another digit

  // for (var length = 16; length <= 19; length++) {
  //   for (var prefix = 624; prefix <= 626; prefix++) {
  //     var input = String(prefix) + '1234323543543'; //16 digits
  //     (function(length, prefix, input){
  //       it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
  //         assert(detectNetwork(input) === 'China UnionPay');
  //       })
  //     })(length, prefix, input);
  //   }
  //   input += '0';
  //   //need to add another digit after breaking prefix loop
  // }

  // for (var length = 16; length <= 19; length++) {
  //   for (var prefix = 6282; prefix <= 6288; prefix++) {
  //     var input = String(prefix) + '123432354354'; //16 digits
  //     (function(length, prefix, input){
  //       it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
  //         assert(detectNetwork(input) === 'China UnionPay');
  //       })
  //     })(length, prefix, input);
  //   }
  //   input += '0';
  //   //need to add another digit after breaking prefix loop
  // }

  // for (var length = 16; length <= 19; length++) {
  //   for (var prefix = 622126; prefix <= 622925; prefix++) {
  //     var input = String(prefix) + '1234323543'; //16 digits
  //     (function(length, prefix, input){
  //       it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
  //         assert(detectNetwork(input) === 'China UnionPay');
  //       })
  //     })(length, prefix, input);
  //   }
  //   input += '0';
  //   //need to add another digit after breaking prefix loop
  // }

  //WORKS BUT NOT IN RIGHT ORDER
  //start with prefix
  //get length 16 with first prefix combo 
  //function expression that takes in input, prefix, and length 
  //must add another 0 to change from 16 digits to 17 digits 

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    var input = String(prefix) + '1234231234';
    for (var length = 16; length <= 19; length++) {
      (function(prefix, input, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          assert(detectNetwork(input) === 'China UnionPay');
        })
      })(prefix, input, length);
      input += '0';
    }
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    var input = String(prefix) + '1231234231423';
    for (var length = 16; length <= 19; length++) {
      (function(prefix, input, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          assert(detectNetwork(input) === 'China UnionPay');
        })
      })(prefix, input, length);
      input += '0';
    }
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    var input = String(prefix) + '123423123452';
    for (var length = 16; length <= 19; length++) {
      (function(prefix, input, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          assert(detectNetwork(input) === 'China UnionPay');
        })
      })(prefix, input, length);
      input += '0';
    }
  }

})

describe('Switch',function() {
  //use assert to test 
  var assert = chai.assert;
  //test each prefix 
  //taking each prefix and creating 16, 18, 19 digits 
  //use for loop to achieve that
  //use function express that takes in prefix and input 

  var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = String(prefixes[i]); //'4903'
    //need to add 12 more digits to prefix and set that to input
    //use for loop 
    var input = prefix;
    for (var j = 0; j < 16 - prefix.length; j++) {
      input += '0';
    }

    //input is now 16 digits '4903000000000000' 
    (function(input, prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(input) === 'Switch');
      })
    })(input, prefix)

    //test for 18 digits
    input += '00'; //'490300000000000000'
    (function(input, prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork(input) === 'Switch');
      })
    })(input, prefix)

    input += '0'; //'4903000000000000000'
    (function(input, prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(input) === 'Switch');
      })
    })(input, prefix)

  }

});



