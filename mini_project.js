// --------------------- Mini Project -----------------

const job_info =[{
    "title": "UI/UX Designer",
    "type": "Full-Time",
    "description": "We are seeking a talented Ui/Ux Designer to join our team in Helsinki, Finland. The ideal candidate will have strong skills in HTML, CSS, Color plattes, Photoshop and Figma, with experience working with experience working with web and mobile applications.",
    "location": "Finland, MA",
    "salary": "$700K - $800K",
    "company": {
      "name": "Jajo Technologies",
      "description": "Jajo Technologies is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
      "contactEmail": "Jajo@Technologies.com",
      "contactPhone": "444-444-444"
    }
  }];
//----------------- add job =--------------------
  function addJob(job)
    {
        job_info.push(job);
        return job_info;
    };
    const addedJob = addJob({"title": "UI Designer",
    "type": "Full-Time",
    "description": "We are seeking a talented Ui/Ux Designer to join our team in Helsinki, Finland. The ideal candidate will have strong skills in HTML, CSS, Color plattes, Photoshop and Figma, with experience working with experience working with web and mobile applications.",
    "location": "Boston, MA",
    "salary": "$700K - $800K",
    "company": {
      "name": "Jajo Technologies",
      "description": "Jajo Technologies is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
      "contactEmail": "Jajo@Technologies.com",
      "contactPhone": "444-444-444"
    }});

    console.log(addedJob);
//----------------- remove job --------------------
function removeJob(jobTitle){
    const items = job_info.filter(item => item.title !== jobTitle);
    return items;
};
console.log(removeJob("UI Designer"));

//----------------- find job --------------------
function findJob(jobTitle){
    const items = job_info.filter(item => item.title === jobTitle);
    return items;
};
console.log(findJob("UI Designer"));

//-------------------update the foloowing job ------------------------------
function updateJob(title, updatedData){
    const job = job_info.find(job => job.title === title);
    if (job){
        if (updatedData.type) {job.type = updatedData.type};
        if (updatedData.description) {job.description = updatedData.description};
        return job
    }
    return false;
};
console.log(updateJob("UI Designer",{type: "Part-Time", description:"Hello I am Jajo"}));


//---------------------delete a specified Job ------------------------------
function deleteJob(title){
    const job = job_info.find(job => job.title === title);
    if (job){
        job_info.splice(job_info.indexOf(job),1);
        return job_info;
    }
}
 console.log(deleteJob("UI Designer"));