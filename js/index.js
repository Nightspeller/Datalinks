var technologyModel = Backbone.Model.extend({
    defaults: {
        type: '',
        name: '',
        image: '',
        shortDescription: '',
        fullDescription:'',
        quote: '',
        requires: [],
        leadsTo: [],
        chassis: [],
        weapon: [],
        armor: [],
        reactor: [],
        ability: [],
        terraform: [],
        secretProject: [],
        facility: [],
        socialChoice: [],
        specialist: [],
        councilProposal: [],
        bonus: []
    },
    initialize: function(){

    }
});
/*
var technologyCollection = Backbone.Collection.extend({
    model: technologyModel,
    initialize: function(){
        //alert("Created");
    }
});*/

var technologyView = Backbone.View.extend({
    //template: Handlebars.compile($('#techTmpl').html()),
    events: {

    },
    initialize: function () {
        _.bindAll(this, 'render'); // remember: every function that uses 'this' as the current object should be in here
    },
    render: function() {
        var template = Handlebars.compile($('#techTmpl').html());
      //  console.log(template,this.$el)
        this.$el.html(template(this.model.attributes));
    }
});

$(document).ready(function() {
    $.getJSON("js/data.json", function(json) {
        console.log(json); // this will show the info it in firebug console
        var data = json.data;
        var technologies = [];
        _.each(data, function(techData,index){
            technologies[index] = new technologyModel(techData);
        });
        var techView = new technologyView({el: $('#techPlace') ,model: technologies[0]});
        techView.render();
    });
});
