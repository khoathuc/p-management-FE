export default class Word {
    static abbreviateString(input: string): string {
        // Split the input string by spaces to get an array of words
        const words = input.trim().split(/\s+/);

        // Check the length of the words array and return the appropriate abbreviation
        if (words.length === 0) {
            return "";
        } else if (words.length === 1) {
            return words[0].charAt(0).toUpperCase();
        } else {
            return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
        }
    }
}
