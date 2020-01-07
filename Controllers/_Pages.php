<?php
class Pages extends Controller
{
  public function
  default()
  {
    // To get home page
    $browserTitle = "Home";
    $arrHome = Home::getHome();
    // $this->body .= $this->loadView("Views/homePage.php", $arrHome);
    // include("Views/mainTemplate.php");
  }

  // This is to populate dropdown menu with ajax
  public function subCategories()
  {
    $arrSubcategories = Subcategories::get($_GET["categoryid"]);
    print_r(json_encode($arrSubcategories));
  }

  public function products()
  {
    // This is for category top pages
    if (isset($_GET["categoryid"])) {
      $browserTitle = "Category Top";
      $category = Subcategories::getAll($_GET["categoryid"]);
      $this->body .= $this->loadView("Views/categoryPage.php", $category);
    } elseif (isset($_GET["subcategoryid"])) {
      // This is for subcategory top pages
      $browserTitle = "Subcategory Top";
      // Get new arrivals
      // if ($_GET["subcategoryid"] == 2 || $_GET["subcategoryid"] == 6) {
      //   $arrProducts = Products::getNew();
      // } else {
      $arrProducts = Products::get();
      // }
      $this->body .= $this->loadView("Views/subcategoryPage.php", $arrProducts);
    }
    include("Views/mainTemplate.php");
  }

  public function product()
  {
    if (isset($_GET["id"]) && isset($_GET["colourid"])) {
      $noHeroNav = "no-hero-nav";
      $product = Product::get($_GET["id"], $_GET["colourid"]);
      $browserTitle = "Product Details";
      $this->body .= $this->loadView("Views/productPage.php", $product);
      include("Views/mainTemplate.php");
    } else {
      header('location: index.php');
    }
  }


  public function addToCart()
  {
    Cart::addItem($_GET["id"]);
    header('location: index.php?controller=pages&route=cart');
  }


  public function cart()
  {
    $browserTitle = "Showing Your Cart";
    $productsInCart = Cart::getItems();
    $this->body .= $this->loadView("Views/showCart.php", $productsInCart);
    include("Views/mainTemplate.php");
  }


  public function mission()
  {
    $this->body .= $this->loadView("Views/mission.php");
    include("Views/mainTemplate.php");
  }


  public function account()
  {
    $this->body .= $this->loadView("Views/account.php");
    include("Views/mainTemplate.php");
  }


  public function preTrip()
  {
    // this function will run before doing any routes inside this controller
    $categories = Categories::getAll();
    $this->nav = $this->loadView("Views/partials/categoryNav.php", $categories);
  }

  public function postTrip()
  {
    // this function will run after running a routes inside this controller
  }
}
