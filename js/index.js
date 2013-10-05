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
    var data = [{
            type: 'D1',
            name: 'Information Networks',
            image: 'Information_Networks.png',
            shortDescription: 'The foundation of scientific research',
            fullDescription: 'Survival equipment from the Unity contained a variety of computers purpose-built for the needs of a frontier society. However, they must first be connected into Information Networks before scientists can utilize their power.',
            quote: 'The righteous need not cower before the drumbeat of human progress. Though the song of yesterday fades into the challenge of tomorrow, God still watches and judges us. Evil lurks in the datalinks as it lurked in the streets of yesteryear. But it was never the streets that were evil. <br />-Sister Miriam Godwinson, <br />"The Blessed Struggle"',
            requires: [],
            leadsTo: ['Planetary Networks', 'Polymorphic Software', 'Nonlinear Mathematics'],
            chassis: [],
            weapon: [],
            armor: [],
            reactor: [],
            ability: [],
            terraform: [],
            secretProject: [],
            facility: ['Network Node'],
            socialChoice: [],
            specialist: [],
            councilProposal: [],
            bonus: []
        },{
            type: 'B1',
            name: 'Industrial Base',
            image: 'Industrial_Base.png',
            shortDescription: 'Bootstrap our industrial infrastructure',
            fullDescription: 'The first colonies lack any kind of factories or heavy industry, so the creation of an Industrial Base becomes a high priority for economic growth. This Industrial Base emphasizes small-scale manufacturing with primitive assembly lines and simple currency instruments.',
            quote: 'Resources exist to be consumed. And consumed they will be, if not by this generation then by some future. By what right does this forgotten future seek to deny us our birthright? None I say! Let us take what is ours, chew and eat our fill. —CEO Nwabudike Morgan, “The Ethics of Greed”',
            requires: [],
            leadsTo: ['Industrial Economics', 'Superconductor', 'High Energy Chemistry', 'Polymorphic Software'],
            chassis: [],
            weapon: [],
            armor: ['Synthmetal Armor'],
            reactor: [],
            ability: [],
            terraform: [],
            secretProject: ['The Merchant Exchange'],
            facility: [],
            socialChoice: [],
            specialist: [],
            councilProposal: [],
            bonus: []
        },{
            type: 'D2',
            name: 'Polymorphic Software',
            image: 'Polymorphic_Software.png',
            shortDescription: 'The first massive neural nets',
            fullDescription: 'On Earth, only theoretical mathematicians and entertainment software programmers used Polymorphic Software—self-modifying code—to any success. On Planet, the requirements of the budding Industrial Base and Information Networks spur widespread development of neural net applications that rewrite themselves in response to data inputs.',
            quote: 'Technological advance is an inherently iterative process. One does not simply take sand from the beach and produce a Dataprobe. We use crude tools to fashion better tools, and then our better tools to fashion more precise tools, and so on. Each minor refinement is a step in the process, and all of the steps must be taken. —Chairman Sheng-ji Yang, “Looking God in the Eye”',
            requires: ['Industrial Base', 'Information Networks'],
            leadsTo: ['Adaptive Doctrine', 'Optical Computers', 'Advanced Subatomic Theory'],
            chassis: [],
            weapon: [],
            armor: [],
            reactor: [],
            ability: ['Heavy Artillery'],
            terraform: [],
            secretProject: [],
            facility: [],
            socialChoice: [],
            specialist: [],
            councilProposal: [],
            bonus: ['Improves Probe Team morale']
        }
    ];
    var technologies = [];
    _.each(data, function(techData,index){
        technologies[index] = new technologyModel(techData);
    });
    var techView = new technologyView({el: $('#techPlace') ,model: technologies[0]});
    techView.render();
});
