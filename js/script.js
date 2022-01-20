const app = new Vue({
    el: "#app",
    data: {
        database: [],
        fullyCharged: false,
        genreSelected: '',
        authSelected: ''
    },
    created() {
        if(this.authSelected == '' && this.genreSelected == '' ){
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
        }
    },
    methods: {
        checkArray(){
            if (this.authSelected != '' && this.genreSelected == '') {
                axios.get('./index.php?author=' + this.authSelected)
                    .then((response) => {
                        this.database = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else if (this.authSelected == '' && this.genreSelected != ''){
                axios.get('./index.php?genre=' + this.genreSelected)
                    .then((response) => {
                        this.database = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else if (this.authSelected != '' && this.genreSelected != '') {
                axios.get('./index.php?genre=' + this.genreSelected + "&author=" + this.authSelected)
                    .then((response) => {
                        this.database = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    },
});