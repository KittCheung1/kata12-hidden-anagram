function hiddenAnagram(input1, name) {
    const str1 = input1.split(" ").join("").replace(/[^a-zA-Z ]/g, "").toLowerCase();
    console.log(str1)
    const name1 = name.split(" ").join("").toLowerCase();
    console.log(name1)

    const anagram = [];

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < name1.length; j++) {
            if (str1[i] == name1[j]) {
                str1[i] ="0"
                str1[i] = str1[i +1]
                name1[j] = "0"
                name1[j] = name1[j + 1]
                anagram.push(str1[i])
            }
        }
    }
    console.log(anagram)
}

hiddenAnagram("An old west action hero actor", "Clint Eastwood") // "noldwestactio"
hiddenAnagram("Banana? margaritas", "ANAGRAM") // "anamarg"