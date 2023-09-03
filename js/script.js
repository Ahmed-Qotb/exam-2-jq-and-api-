// ! =============> HTML ELEMENTS

// ? HOME PAGE
const homeContainer = document.getElementById('homeContainer');

// ? meals arr
let mealsArr = [];

// ? side bar initial values
let sidebarInnerWidth = $('#sideBar .box').outerWidth()
$('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 0);

// ? side par pages
const pages = document.querySelectorAll('.pages li')

// ? home items
const homeItems = document.querySelectorAll('#homeItem')

// ? meals Info Arr
let mealsInfoArr = [];

// ? search by first letter array
let SearchInfoFstLetterArr = [];

// ? selected food array
let selecedFood = [];

// ? Search Info array
let SearchInfoArr = [];

// ? Search result array
let searchResult = [];

// ? category array
let categoryArr = [];

// ? category array
let areaArr = [];

// ? ingrediants array
let ingrediantsArr = [];

// ? category box 
const categoriesBox = document.getElementById('categoriesBox')

// ? ingrediants box 
const ingrediantsBox = document.getElementById('ingrediantsBox')

// ? area box
const areaBox = document.getElementById('areaBox')

// ? ssearch container 
const showItems = document.getElementById('showItems');
// ? about container
const aboutParent = document.getElementById('aboutParent')

// ? about container
const byName = document.getElementById('byName')

// ? about container
const byFirstLetter = document.getElementById('byFirstLetter')

// ? pages
const search = document.getElementById('Search')
const Categories = document.getElementById('Categories')
const Area = document.getElementById('Area')
const Ingredients = document.getElementById('Ingredients')
const ContactUs = document.getElementById('ContactUs')


// ? for regex contact us section
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone');
const Age = document.getElementById('Age');
const Password = document.getElementById('Password');
const Repassword = document.getElementById('Repassword');
const submit = document.getElementById('submit')
// * =============> HTML ELEMENTS END


// ! JQUERY INITIAL LOADING

// ? loading screen
$(document).ready(function () {
    // $('#loaderParent').fadeOut(function (){})
    $('#loaderParent').fadeOut(function () {
        $('body').css('overflow', 'auto')
        $('#loaderParent').addClass('d-none');
        // $($('#loaderParent')).remove();


        // ! =============> API

        // ? home api func
        async function getHomeApi(x) {
            const HomeMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
            const HomeMealsReady = await HomeMeals.json();
            mealsArr = HomeMealsReady.meals;
            // console.log(mealsArr);
            displayHome(mealsArr)
        }
        getHomeApi('')

        // ? meal info api
        async function getMealInfo(x) {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const MealsInfo = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`)
            const MealsInfoReady = await MealsInfo.json();
            mealsInfoArr = MealsInfoReady.meals;
            // console.log(mealsInfoArr);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return mealsInfoArr
        }

        // ? search api
        async function getSearchInfo(x) {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const SearchInfo = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
            const SearchInfoReady = await SearchInfo.json();
            SearchInfoArr = SearchInfoReady.meals;
            // console.log(SearchInfoArr);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return SearchInfoArr
        }

        // ? search by fst letter
        async function getSearchInfoFstLetter(x) {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const SearchInfoFstLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`)
            const SearchInfoFstLetterReady = await SearchInfoFstLetter.json();
            SearchInfoFstLetterArr = SearchInfoFstLetterReady.meals;
            // console.log(SearchInfoFstLetterArr);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return SearchInfoFstLetterArr
        }

        // ? get category api
        async function getCategory() {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const category = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            const categoryReady = await category.json();
            // console.log(categoryReady);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return categoryReady.categories
        }

        // ? get filter by category api
        async function getFilterByCat(x) {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const filterByCat = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
            const filterByCatReady = await filterByCat.json();
            // console.log(filterByCatReady);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return filterByCatReady
        }

        // ? get area api
        async function getArea() {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const area = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            const areaReady = await area.json();
            // console.log(filterByCatReady);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return areaReady.meals
        }

        // ? get filter by area api
        async function getFilterByArea(x) {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const filterByArea = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`)
            const filterByAreaReady = await filterByArea.json();
            // console.log(filterByAreaReady);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return filterByAreaReady
        }

        // ?get ingrediants api
        async function getIngrediants() {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const ingrediants = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            const ingrediantsReady = await ingrediants.json();
            // console.log(filterByCatReady);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return ingrediantsReady.meals
        }

        // ? get Filter By Ingrediants api
        async function getFilterByIngrediants(x) {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0)
            const FilterByIngrediants = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`)
            const FilterByIngrediantsReady = await FilterByIngrediants.json();
            // console.log(FilterByIngrediantsReady);
            $('#loaderParent').fadeOut(500, () => {
                $('#loaderParent').addClass('d-none')
            })
            return FilterByIngrediantsReady
        }
        // * =============> API END


        // ! =============> DISPLAY FUNCTIONS

        // ? display home page 
        function displayHome(array) {
            // ? declareing a container to put the api in it
            let homeCartona = ``;
            for (let i = 0; i < array.length; i++) {
                homeCartona += `
        
        <div class="col-md-3">
        <div id="homeItem" class="parent rounded-3 position-relative overflow-hidden">

            <!-- ? food image -->
            <div class="frame">
                <img src="${array[i].strMealThumb}" alt="">
            </div>

            <!-- ? food name -->
            <div class="foodName position-absolute d-flex align-items-center">
                <p class="h3 fw-bolder">${array[i].strMeal}</p>
            </div>
        </div>
        </div>
        `

                // ? adding the container to home inner html
                homeContainer.innerHTML = homeCartona
            }

            let allMeals = Array.from(document.querySelectorAll('#homeContainer .parent'))
            // console.log(allMeals);
            for (let j = 0; j < allMeals.length; j++) {
                allMeals[j].addEventListener("click", async () => {
                    // console.log(array[j].idMeal);
                    selecedFood = await getMealInfo(array[j].idMeal)
                    $('#home').addClass('d-none');
                    $('#about').removeClass('d-none');
                    // console.log(selecedFood);
                    displayAboutFood()
                })

            }
        }

        // ? display about food
        function displayAboutFood() {

            // ? making an array for recipes and deleting the empty indexes
            let recipesArr = [];
            // let Recipes = ``;
            for (let i = 1; i < 21; i++) {

                // console.log(selecedFood[0][`strMeasure${i}`]);
                recipesArr.push(selecedFood[0][`strMeasure${i}`])
                // Recipes += `<li class="recipe mx-3 my-3 py-2 px-2 rounded-3">${selecedFood[0][`strMeasure${i}`] + '' + selecedFood[0][`strIngredient${i}`]}</li>`

            }
            let currentIndex = 0;
            let showRecipe = recipesArr.map((recipe) => {
                currentIndex += 1
                // console.log(currentIndex);

                if (recipe != ' ' && recipe != '') {
                    return `<li class="recipe mx-3 my-3 py-2 px-2 rounded-3">${recipe + '' + selecedFood[0][`strIngredient${currentIndex}`]}</li>`
                }


            }).join("")
            // console.log(currentIndex);
            // console.log(showRecipe);

            // ? making a tags array like recipes
            let tags = selecedFood[0].strTags?.split(",");
            if (!tags) tags = [];


            // console.log(tags);
            let showTag = tags.map((tag) => {
                return `<li class="tags mx-3 my-3 py-2 px-2 rounded-3">${tag}</li>`
            }).join("")
            // console.log(showTag);


            let aboutCartona = `
            <div class="col-lg-4">
            <div class="frame">
                <img src="${selecedFood[0].strMealThumb}" alt="">
                <p class="h3">${selecedFood[0].strMeal}</p>
            </div>
        </div>
        <div class="col-lg-8">
            <!-- ? food name -->
            <p class="h3">Instructions</p>

            <!-- ? food discription -->
            <p>
                ${selecedFood[0].strInstructions}
            </p>

            <ul class="list-unstyled">
                <li class="h4"><span class="fw-bold">Area : </span>${selecedFood[0].strArea}</li>
                <li class="h4"><span class="fw-bold">Category : </span>${selecedFood[0].strCategory}</li>
                <li class="h4"><span class="fw-bold">Recipes : </span></li>
            </ul>

            <!-- ? Recipes  -->
            <div>
                <ul class="list-unstyled d-flex flex-wrap text-black text-muted">
                ${showRecipe}
                </ul>
            </div>

            <!-- ?tags -->
            <p class="h3">Tags :</p>
            <div>
            
                <ul class="list-unstyled d-flex flex-wrap text-black text-muted">
                    ${showTag}
                </ul>
            </div>

            <!-- ? sourece and youtube btn -->
            <div>
                <button class="btn btn-success"><a class="text-decoration-none text-white" href="${selecedFood[0].strSource}" target="_blank">sourece</a></button>
                <button class="btn btn-danger"><a class="text-decoration-none text-white" href="${selecedFood[0].strYoutube}" target="_blank">youtube</a></button>
            </div>
        </div>
            `
            aboutParent.innerHTML = aboutCartona

        }

        // ? display search result
        function displaySearchResults() {
            let searchCartona = ``;
            for (let i = 0; i < searchResult.length; i++) {
                searchCartona += `
        
        <div class="col-md-3">
        <div id="searchItem" class="parent rounded-3 position-relative overflow-hidden">

            <!-- ? food image -->
            <div class="frame">
                <img src="${searchResult[i].strMealThumb}" alt="">
            </div>

            <!-- ? food name -->
            <div class="foodName position-absolute d-flex align-items-center">
                <p class="h3 fw-bolder">${searchResult[i].strMeal}</p>
            </div>
        </div>
        </div>
        `

                // ? adding the container to home inner html
                showItems.innerHTML = searchCartona
            }

            let allMeals = Array.from(document.querySelectorAll('#showItems .parent'))
            // console.log(allMeals);
            for (let j = 0; j < allMeals.length; j++) {
                allMeals[j].addEventListener("click", async () => {
                    // console.log(searchResult[j].idMeal);
                    selecedFood = await getMealInfo(searchResult[j].idMeal)
                    $('#searchSec').addClass('d-none');
                    $('#about').removeClass('d-none');
                    // console.log(selecedFood);
                    displayAboutFood()
                })

            }
        }

        // ? display Category
        function displayCategory() {
            let categoryCartona = ``
            for (let i = 0; i < categoryArr.length; i++) {
                categoryCartona += `
                
                <div class="col-md-3">
                <div class="parent position-relative rounded-3 text-black overflow-hidden">
                    <!-- ? catigory pecture -->
                    <div class="frame">
                        <img src="${categoryArr[i].strCategoryThumb}" alt="">
                    </div>

                    <!-- ?category info -->
                    <div class="catInfo position-absolute">
                        <h3 class="fw-bolder">${categoryArr[i].strCategory}</h3>
                        <p class="fw-bolder">${categoryArr[i].strCategoryDescription.slice('0', '120')}</p>
                    </div>
                </div>
                </div>
                
                `
            }

            categoriesBox.innerHTML = categoryCartona

            let allCat = Array.from(document.querySelectorAll('#categoriesBox .parent'))
            // console.log(allCat);
            for (let j = 0; j < allCat.length; j++) {
                allCat[j].addEventListener("click", async () => {
                    // console.log(categoryArr[j].strCategory);
                    selecedFood = await getFilterByCat(categoryArr[j].strCategory)
                    // console.log(selecedFood.meals);
                    $('#categoriesSec').addClass('d-none');
                    $('#home').removeClass('d-none');
                    // // console.log(selecedFood);
                    displayHome(selecedFood.meals)
                })

            }
        }

        // ? display area
        function displayArea() {
            let areaCartona = ``;
            for (let i = 0; i < areaArr.length; i++) {
                areaCartona += `
    
                <div class="col-md-3">
                <div class="parent">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${areaArr[i].strArea}</h3>
                </div>
                </div>
    
            `
            }

            areaBox.innerHTML = areaCartona

            let allArea = Array.from(document.querySelectorAll('#areaBox .parent'))
            // console.log(allArea);
            for (let j = 0; j < allArea.length; j++) {
                allArea[j].addEventListener("click", async () => {
                    // console.log(areaArr[j].strArea);
                    selecedFood = await getFilterByArea(areaArr[j].strArea)
                    // console.log(selecedFood);
                    $('#areaSec').addClass('d-none');
                    $('#home').removeClass('d-none');
                    // // console.log(selecedFood);
                    displayHome(selecedFood.meals)
                })

            }
        }

        // ? display ingrediants
        function displayIngrediants() {
            let ingrediantsCartona = ``
            for (let i = 0; i < 20; i++) {
                ingrediantsCartona += `
                
                <div class="col-md-3">
                <div class="parent">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${ingrediantsArr[i].strIngredient}</h3>
                    <p>${ingrediantsArr[i].strDescription.slice('0', '120')}</p>
                </div>
                </div>
                
                
                `
            }
            ingrediantsBox.innerHTML = ingrediantsCartona;

            let allIngrediants = Array.from(document.querySelectorAll('#ingrediantsBox .parent'))
            // console.log(allIngrediants);
            for (let j = 0; j < allIngrediants.length; j++) {
                allIngrediants[j].addEventListener("click", async () => {
                    // console.log(ingrediantsArr[j].strArea);
                    selecedFood = await getFilterByIngrediants(ingrediantsArr[j].strIngredient)
                    // console.log(selecedFood);
                    $('#ingrediantsSec').addClass('d-none');
                    $('#home').removeClass('d-none');
                    // // console.log(selecedFood);
                    displayHome(selecedFood.meals)
                })

            }

        }

        // * =============> DISPLAY FUNCTIONS END


        // ?side bar open and close
        $('.openSideBarBtn i').click(function () {
            // ? getting side bar width to close it and open it on click
            sidebarInnerWidth = $('#sideBar .box').outerWidth()
            if ($('#sideBar .parent').css('left') == '0px') {
                $('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 500);

                $('.openSideBarBtn i').removeClass('fa-xmark');
                $('.openSideBarBtn i').addClass('fa-bars');
                // console.log('in');
                // $('#Search').slideUp(0)

                $('#Search').removeClass('animate__bounceInUp');
                $('#Categories').removeClass('animate__bounceInUp');
                $('#Area').removeClass('animate__bounceInUp');
                $('#Ingredients').removeClass('animate__bounceInUp');
                $('#ContactUs').removeClass('animate__bounceInUp');


            } else {
                $('#sideBar .parent').animate({ left: 0 }, 500);
                // console.log('out');


                $('.openSideBarBtn i').removeClass('fa-bars');
                $('.openSideBarBtn i').addClass('fa-xmark');

                $('#Search').addClass('animate__bounceInUp');
                $('#Categories').addClass('animate__bounceInUp');
                $('#Area').addClass('animate__bounceInUp');
                $('#Ingredients').addClass('animate__bounceInUp');
                $('#ContactUs').addClass('animate__bounceInUp');


            }

        });

        // ! =============> EVENTS

        // ? go to search page
        search.addEventListener('click', () => {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0, () => {
                $('#loaderParent').fadeOut(500, () => {
                    $('#loaderParent').addClass('d-none')
                })
            })

            $('#searchSec').removeClass('d-none');
            $('#home').addClass('d-none');
            $('#categoriesSec').addClass('d-none');
            $('#areaSec').addClass('d-none');
            $('#ingrediantsSec').addClass('d-none');
            $('#about').addClass('d-none');
            $('#contactUsSec').addClass('d-none');

            // ? closing side bar on click
            $('.openSideBarBtn i').removeClass('fa-xmark');
            $('.openSideBarBtn i').addClass('fa-bars');

            $('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 500);
            $('#Search').removeClass('animate__bounceInUp');
            $('#Categories').removeClass('animate__bounceInUp');
            $('#Area').removeClass('animate__bounceInUp');
            $('#Ingredients').removeClass('animate__bounceInUp');
            $('#ContactUs').removeClass('animate__bounceInUp');

            // ? search by name
            byName.addEventListener('keyup', async () => {
                searchResult = await getSearchInfo(byName.value);
                // console.log(searchResult);
                displaySearchResults()
            })

            // ? search by first letter
            byFirstLetter.addEventListener('keyup', async () => {
                searchResult = await getSearchInfoFstLetter(byFirstLetter.value);
                // console.log(searchResult);
                displaySearchResults()
            })
        })

        // ? go to Categories page
        Categories.addEventListener('click', async () => {
            $('#searchSec').addClass('d-none');
            $('#home').addClass('d-none');
            $('#categoriesSec').removeClass('d-none');
            $('#areaSec').addClass('d-none');
            $('#ingrediantsSec').addClass('d-none');
            $('#about').addClass('d-none');
            $('#contactUsSec').addClass('d-none');

            // ? closing side bar on click
            $('.openSideBarBtn i').removeClass('fa-xmark');
            $('.openSideBarBtn i').addClass('fa-bars');

            $('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 500);
            $('#Search').removeClass('animate__bounceInUp');
            $('#Categories').removeClass('animate__bounceInUp');
            $('#Area').removeClass('animate__bounceInUp');
            $('#Ingredients').removeClass('animate__bounceInUp');
            $('#ContactUs').removeClass('animate__bounceInUp');

            categoryArr = await getCategory();
            // console.log(categoryArr);
            displayCategory();


        })

        // ? go to Area page
        Area.addEventListener('click', async () => {
            $('#searchSec').addClass('d-none');
            $('#home').addClass('d-none');
            $('#categoriesSec').addClass('d-none');
            $('#areaSec').removeClass('d-none');
            $('#ingrediantsSec').addClass('d-none');
            $('#about').addClass('d-none');
            $('#contactUsSec').addClass('d-none');

            // ? closing side bar on click
            $('.openSideBarBtn i').removeClass('fa-xmark');
            $('.openSideBarBtn i').addClass('fa-bars');

            $('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 500);
            $('#Search').removeClass('animate__bounceInUp');
            $('#Categories').removeClass('animate__bounceInUp');
            $('#Area').removeClass('animate__bounceInUp');
            $('#Ingredients').removeClass('animate__bounceInUp');
            $('#ContactUs').removeClass('animate__bounceInUp');

            areaArr = await getArea();
            // console.log(areaArr);
            displayArea();
        })

        // ? go to Ingredients page
        Ingredients.addEventListener('click', async () => {
            $('#searchSec').addClass('d-none');
            $('#home').addClass('d-none');
            $('#categoriesSec').addClass('d-none');
            $('#areaSec').addClass('d-none');
            $('#ingrediantsSec').removeClass('d-none');
            $('#about').addClass('d-none');
            $('#contactUsSec').addClass('d-none');

            // ? closing side bar on click
            $('.openSideBarBtn i').removeClass('fa-xmark');
            $('.openSideBarBtn i').addClass('fa-bars');

            $('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 500);
            $('#Search').removeClass('animate__bounceInUp');
            $('#Categories').removeClass('animate__bounceInUp');
            $('#Area').removeClass('animate__bounceInUp');
            $('#Ingredients').removeClass('animate__bounceInUp');
            $('#ContactUs').removeClass('animate__bounceInUp');

            ingrediantsArr = await getIngrediants();
            // console.log(ingrediantsArr);
            displayIngrediants();
        })

        // ? go to ContactUs page
        ContactUs.addEventListener('click', () => {
            $('#loaderParent').removeClass('d-none');
            $('#loaderParent').fadeIn(0, () => {
                $('#loaderParent').fadeOut(500, () => {
                    $('#loaderParent').addClass('d-none')
                })
            })

            $('#searchSec').addClass('d-none');
            $('#home').addClass('d-none');
            $('#categoriesSec').addClass('d-none');
            $('#areaSec').addClass('d-none');
            $('#ingrediantsSec').addClass('d-none');
            $('#about').addClass('d-none');
            $('#contactUsSec').removeClass('d-none');

            // ? closing side bar on click
            $('.openSideBarBtn i').removeClass('fa-xmark');
            $('.openSideBarBtn i').addClass('fa-bars');

            $('#sideBar .parent').animate({ left: -sidebarInnerWidth }, 500);
            $('#Search').removeClass('animate__bounceInUp');
            $('#Categories').removeClass('animate__bounceInUp');
            $('#Area').removeClass('animate__bounceInUp');
            $('#Ingredients').removeClass('animate__bounceInUp');
            $('#ContactUs').removeClass('animate__bounceInUp');


            // ! =========> REGEX
            // Name
            // Email
            // Phone
            // Age
            // Password
            // Repassword

            // ? regex functions
            function cheackName() {
                return (/^[a-zA-Z ]+$/.test(Name.value))
            }

            function cheackEmail() {
                return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email.value))
            }

            function cheackPhone() {
                return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(Phone.value))
            }

            function cheackAge() {
                return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(Age.value))
            }

            function cheackPassword() {
                return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(Password.value))
            }

            function cheackRepassword() {
                return Repassword.value == Password.value
            }


            // ? events to check valedaion on key up
            Name.addEventListener('keyup', () => {
                if (cheackName() == true) {
                    console.log('name valid');
                    $('#NameAlert').addClass('d-none');
                    $('#NameAlert').removeClass('d-block');
                } else {
                    console.log('name not valid');
                    $('#NameAlert').removeClass('d-none');
                    $('#NameAlert').addClass('d-block');

                }
                checkInputs()
            })

            Email.addEventListener('keyup', () => {
                if (cheackEmail() == true) {
                    console.log('Email valid');
                    $('#EmailAlert').addClass('d-none');
                    $('#EmailAlert').removeClass('d-block');
                } else {
                    console.log('Email not valid');
                    $('#EmailAlert').removeClass('d-none');
                    $('#EmailAlert').addClass('d-block');

                }
                checkInputs()

            })

            Phone.addEventListener('keyup', () => {
                if (cheackPhone() == true) {
                    console.log('Phone valid');
                    $('#PhoneAlert').addClass('d-none');
                    $('#PhoneAlert').removeClass('d-block');
                } else {
                    console.log('Phone not valid');
                    $('#PhoneAlert').removeClass('d-none');
                    $('#PhoneAlert').addClass('d-block');

                }
                checkInputs()

            })

            Age.addEventListener('keyup', () => {
                if (cheackAge() == true) {
                    console.log('Age valid');
                    $('#AgeAlert').addClass('d-none');
                    $('#AgeAlert').removeClass('d-block');
                } else {
                    console.log('Age not valid');
                    $('#AgeAlert').removeClass('d-none');
                    $('#AgeAlert').addClass('d-block');

                }
                checkInputs()

            })

            Password.addEventListener('keyup', () => {
                if (cheackPassword() == true) {
                    console.log('Password valid');
                    $('#PasswordAlert').addClass('d-none');
                    $('#PasswordAlert').removeClass('d-block');
                } else {
                    console.log('Password not valid');
                    $('#PasswordAlert').removeClass('d-none');
                    $('#PasswordAlert').addClass('d-block');

                }
                checkInputs()

            })

            Repassword.addEventListener('keyup', () => {
                if (cheackRepassword() == true) {
                    console.log('Repassword valid');
                    $('#RepasswordAlert').addClass('d-none');
                    $('#RepasswordAlert').removeClass('d-block');
                } else {
                    console.log('Repassword not valid');
                    $('#RepasswordAlert').removeClass('d-none');
                    $('#RepasswordAlert').addClass('d-block');

                }
                checkInputs()

            })

            // ? function to show submit btn
            function checkInputs() {
                if (cheackName() == true && cheackEmail() == true && cheackPhone() == true && cheackAge() == true && cheackPassword() == true && cheackRepassword() == true) {
                    submit.removeAttribute("disabled")
                } else {
                    submit.setAttribute("disabled", true)
                }
            }

            // ? =========> REGEXEND

        })

        // ? =============> EVENTS END

    });
});