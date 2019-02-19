console.log("hihihi");
/* Badger's Revenge
The names of those who are witnessed clapping Badger more than twice in the first
four days of any one week will go into a draw. On Friday morning, a random name
will be drawn from that list and the 'winner' will be forced to deliver the solution
to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create
an object (revengeOfBadger) to do this, but if you can get it working using
standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week (just make up the numbers);
Include a collection of candidates for the Friday draw (ie, a list of names of
people who have clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
If no one has clapped enough that week, the program should indicate that Badger
has to do his own damned warmup.*/

const revengeOfBadger = {

  student: {
  "Brendan" : 1,
  "Daniel" : 2,
  "David" : 3,
  "Richard" :4,
  "Jessey" :5
  },
  shortlist: [],
  getStudentList:  function () {
    this.shortlist = [];
    for (let key in this.student){
      if (this.student[key] > 2) {
        this.shortlist.push(key);
      }
    }
    console.log(this.shortlist);//["David"] ["Richar"]["Jessey"]
    return this.shortlist.length//3
  },
  draw: function () {
    let winner = "Badger";
    let numberOfCandidates = this.getStudentList ();//3
    if (numberOfCandidates > 0){
      let randy = Math.floor(Math.random()) * numberOfCandidates;
      winner = this.shortlist[randy];
    }
    return `winner`
  }
}
