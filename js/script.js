const app = new Vue({
    el: "#app",
    data: {
        database: [],
        fullyCharged: false,
        selectedGenre: '',
        selectedAuth: '',
        genreSelected: '',
        authSelected: ''
    },
    created() {
    axios.get('./index.php')
            .then((response) => {
                this.database = response.data;
                if (this.database.length == 10) {
                    this.fullyCharged = true;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {
        searchGenre(payload){
            this.selectedGenre = payload;
        },
        searchAuth(payload){
            this.selectedAuth = payload;
        },
    },
    computed: {
        songFiltered() {
            // let array = this.song.filter((elm) => {
            //     return (elm.genre.toLowerCase().includes(this.selectedGenre.toLowerCase()) && elm.author.toLowerCase().includes(this.selectedAuth.toLowerCase()));
            // });
            // return array;

            let array = this.database.filter((item) => {
                return item.genre.toLowerCase().includes(this.genreSelected.toLowerCase()) && item.author.toLowerCase().includes(this.authSelected.toLowerCase());
            });
            return array;
        }
    }
});