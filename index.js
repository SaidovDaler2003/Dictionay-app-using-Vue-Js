const log = console.log;
const warn = console.warn;
const error = console.error;


const dictionary = new Vue({
    el: '#app',
    data: {
        wordInput: '',
        transInput: '',
        searchInput: '',
        searching: false,
        words: [],
        searchedWords: []
    },
    methods: {
        addNewWord: function() {
            if(this.wordInput === '' || this.transInput === '')
                return;
            const word = {
                word: this.wordInput,
                trans: this.transInput
            };
            this.words.push(word);
            this.cleanInputs();
        },
        cleanInputs: function() {
            this.wordInput = '';
            this.transInput = '';
        },
        search: function() {
            this.searchedWords.length = 0;
            if(this.searchInput === '')
                this.searching = false;
            else {
                for(let word of this.words) {
                    if(word.word.includes(this.searchInput))
                        this.searchedWords.push(word);
                }
                this.searching = true;
            }
        }
    }
});
