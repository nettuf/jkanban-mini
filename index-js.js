var KanbanTest = new jKanban({
  element: "#myKanban",
  gutter: "10px",
  widthBoard: "450px",
  dragBoards: true,
  dragItems: true,  
  itemHandleOptions:{
    enabled: false,
  },
  click: function(el) {
  },
  context: function(el, e) {
  },
  dropEl: function(el, target, source, sibling){
  },
  buttonClick: function(el, boardId) {
    // create a form to enter element
    var formItem = document.createElement("form");
    formItem.setAttribute("class", "itemform");
    formItem.innerHTML =
      '<div class="form-group"><textarea class="form-control" rows="2" autofocus></textarea></div><div class="form-group"><button type="submit" class="btn btn-primary btn-xs pull-right">Submit</button><button type="button" id="CancelBtn" class="btn btn-default btn-xs pull-right">Cancel</button></div>';

    KanbanTest.addForm(boardId, formItem);
    formItem.addEventListener("submit", function(e) {
      e.preventDefault();
      var text = e.target[0].value;
      KanbanTest.addElement(boardId, {
        title: text
      });
      formItem.parentNode.removeChild(formItem);
    });
    document.getElementById("CancelBtn").onclick = function() {
      formItem.parentNode.removeChild(formItem);
    };
  },
  itemAddOptions: {
    enabled: true,
    content: '+ Add New Card',
    class: 'custom-button',
    footer: true
  },
  boards: [
    {
      id: "_todo",
      title: "To Do (Can drop item only in working)",
      class: "info,good",
      dragTo: ["_working"],
      item: [
      ]
    },
    {
      id: "_working",
      title: "Working (Try drag me too)",
      class: "warning",
      item: [
      ]
    },
    {
      id: "_done",
      title: "Done (Can drop item only in working)",
      class: "success",
      dragTo: ["_working"],
      item: [
      ]
    }
  ]
});

var allEle = KanbanTest.getBoardElements("_todo");
allEle.forEach(function(item, index) {
});

