
module.exports = class CodeWars {



    //Create a function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".
    
    rot13(message) {

        return message.split('')
            .map((item) => {
                if(item.match(/[A-M]/g)) return String.fromCharCode(item.charCodeAt(0) + 13).toUpperCase();
                if(item.match(/[a-m]/g)) return String.fromCharCode(item.charCodeAt(0) + 13);
                if(item.match(/[N-Z]/g)) return String.fromCharCode(item.charCodeAt(0) - 13).toUpperCase();
                if(item.match(/[n-z]/g)) return String.fromCharCode(item.charCodeAt(0) - 13);
                else return item;
            })
            .join('');
    }


    array_diff(a, b) {
    
        const dict = b.reduce((acc, item) => {
            acc[item] = true;
            return acc;
        }, {});
    
        return  a.filter((item) => {
            if(!dict[item]) return item;
        });

    }

    capitalize(s) {
        // this is the alt-cap challenge
        let splitS = s.split('');
        let ans = [];

        for(let i = 0; i < 2; i++) {
            let temp = [];
            splitS.forEach((element, index) => {
                if(index % 2 == i) { temp.push(element.toUpperCase()); }
                else { temp.push(element); }
            });
            ans.push(temp.join(''));
        }

        return ans;
    }

    gimme(inputArray) {
        //this is the find-middle-element challenge
        const orig = [...inputArray];
        const val = inputArray.sort((a, b) => { return a - b });
        return orig
            .indexOf(val[1]);
    }

    isNice(arr) {
        //this is the nice-array challenge
        return arr
            .every(el => arr
                .some(comp => comp === el + 1 || comp === el - 1));
    }

};




