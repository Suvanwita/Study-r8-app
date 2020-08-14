//form to Choose Planner
class Form3{
    constructor(){}

    display(){
       
        //left column
        var GoalSettingButton=createButton("Goal Setting");
        GoalSettingButton.position(400,200);
        GoalSettingButton.size(300,80);

        var TimePlannerButton=createButton("Time Planner");
        TimePlannerButton.position(450,350);
        TimePlannerButton.size(300,80);
        
        var ExamScheduleButton=createButton("Exam Schedule");
        ExamScheduleButton.position(400,500);
        ExamScheduleButton.size(300,80);
        
        var YourProgressButton=createButton("Your Progress");
        YourProgressButton.position(450,650);
        YourProgressButton.size(300,80);

         var LibraryButton=createButton("Library");
        LibraryButton.position(400,800);
        LibraryButton.size(300,80);

        //right column
        var AssignmentButton=createButton("Assignment");
        AssignmentButton.position(950,200);
        AssignmentButton.size(300,80);

        var TuitionButton=createButton("Tuition class");
        TuitionButton.position(1000,350);
        TuitionButton.size(300,80);
        
        var FeesPaymentButton=createButton("Fees Payment");
        FeesPaymentButton.position(950,500);
        FeesPaymentButton.size(300,80);
        
        var CocurricularButton=createButton("Cocurricular Activities");
        CocurricularButton.position(1000,650);
        CocurricularButton.size(300,80);

         var ReminderButton=createButton("Reminders");
        ReminderButton.position(950,800);
        ReminderButton.size(300,80);

        GoalSettingButton.mousePressed(function(){

           GoalSettingButton.hide();
           ExamScheduleButton.hide();
           TimePlannerButton.hide();
           YourProgressButton.hide();
           LibraryButton.hide();
           AssignmentButton.hide();
           ReminderButton.hide();
           CocurricularButton.hide();
           FeesPaymentButton.hide();
           TuitionButton.hide();

           goal=new GoalSetting();
            game.update(3);
            game.displayGoalSetting();

       


        })

       TimePlannerButton.mousePressed(function(){

        GoalSettingButton.hide();
        ExamScheduleButton.hide();
        TimePlannerButton.hide();
        YourProgressButton.hide();
        LibraryButton.hide();
        AssignmentButton.hide();
        ReminderButton.hide();
        CocurricularButton.hide();
        FeesPaymentButton.hide();
        TuitionButton.hide();
 
             game.update(4);
             //game.displayInfo();
 
         })

         ExamScheduleButton.mousePressed(function(){

            GoalSettingButton.hide();
           ExamScheduleButton.hide();
           TimePlannerButton.hide();
           YourProgressButton.hide();
           LibraryButton.hide();
           AssignmentButton.hide();
           ReminderButton.hide();
           CocurricularButton.hide();
           FeesPaymentButton.hide();
           TuitionButton.hide();
 
             game.update(5);
             //game.displayInfo();
 
         })

         YourProgressButton.mousePressed(function(){

            GoalSettingButton.hide();
            ExamScheduleButton.hide();
            TimePlannerButton.hide();
            YourProgressButton.hide();
            LibraryButton.hide();
            AssignmentButton.hide();
            ReminderButton.hide();
            CocurricularButton.hide();
            FeesPaymentButton.hide();
            TuitionButton.hide();
 
             game.update(6);
             //game.displayInfo();
 
         })
  
         LibraryButton.mousePressed(function(){

            GoalSettingButton.hide();
            ExamScheduleButton.hide();
            TimePlannerButton.hide();
            YourProgressButton.hide();
            LibraryButton.hide();
            AssignmentButton.hide();
            ReminderButton.hide();
            CocurricularButton.hide();
            FeesPaymentButton.hide();
            TuitionButton.hide();
 
             game.update(7);
             //game.displayInfo();
 
         })
 
        FeesPaymentButton.mousePressed(function(){
 
            GoalSettingButton.hide();
            ExamScheduleButton.hide();
            TimePlannerButton.hide();
            YourProgressButton.hide();
            LibraryButton.hide();
            AssignmentButton.hide();
            ReminderButton.hide();
            CocurricularButton.hide();
            FeesPaymentButton.hide();
            TuitionButton.hide();
  
              game.update(8);
              //game.displayInfo();
  
          })
 
          AssignmentButton.mousePressed(function(){
 
            GoalSettingButton.hide();
           ExamScheduleButton.hide();
           TimePlannerButton.hide();
           YourProgressButton.hide();
           LibraryButton.hide();
           AssignmentButton.hide();
           ReminderButton.hide();
           CocurricularButton.hide();
           FeesPaymentButton.hide();
           TuitionButton.hide();
  
              game.update(9);
              //game.displayInfo();
  
          })
 
         TuitionButton.mousePressed(function(){
 
            GoalSettingButton.hide();
            ExamScheduleButton.hide();
            TimePlannerButton.hide();
            YourProgressButton.hide();
            LibraryButton.hide();
            AssignmentButton.hide();
            ReminderButton.hide();
            CocurricularButton.hide();
            FeesPaymentButton.hide();
            TuitionButton.hide();
  
              game.update(10);
              //game.displayInfo();
  
          })
          CocurricularButton.mousePressed(function(){
 
            GoalSettingButton.hide();
            ExamScheduleButton.hide();
            TimePlannerButton.hide();
            YourProgressButton.hide();
            LibraryButton.hide();
            AssignmentButton.hide();
            ReminderButton.hide();
            CocurricularButton.hide();
            FeesPaymentButton.hide();
            TuitionButton.hide();
 
             game.update(11);
             //game.displayInfo();
 
         })
        ReminderButton.mousePressed(function(){
 
            GoalSettingButton.hide();
           ExamScheduleButton.hide();
           TimePlannerButton.hide();
           YourProgressButton.hide();
           LibraryButton.hide();
           AssignmentButton.hide();
           ReminderButton.hide();
           CocurricularButton.hide();
           FeesPaymentButton.hide();
           TuitionButton.hide();

 
             game.update(12);
             //game.displayInfo();
 
         })
   
    }

}