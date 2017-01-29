//This is for subscribing only selected recipe -- look at the publis.js
Template.RecipeSingle.onCreated(function() {
  var self = this;
    self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleRecipe',id);
  });
});

Template.RecipeSingle.helpers({
  recipe: ()=>{
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
    //  return Recipes.find({});
  }
});
