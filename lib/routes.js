Accounts.onLogin(function(){
  FlowRouter.go('recipe-book');
});

Accounts.onLogout(function(){
  FlowRouter.go('home');
});


//This is for unsgined users
FlowRouter.triggers.enter([function(context,redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home')
  }
}])

FlowRouter.route('/',{
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book',{
  name: 'recipe-book',
  action() {
        GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});
//This is for clicking only recipe,
//it tajes the id of recipe than Directed RecipeSingle.html
FlowRouter.route('/recipe/:id',{
  name: 'recipe',
  action() {
        GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});

FlowRouter.route('/menu',{
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/shopping-list',{
  name: 'shopping-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});
