main();

function main(){
    const rawTeamData = `
    Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
    Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
    Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
    Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
    Scott Estrada	Developer	scott-estrada-developer.jpg
    Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
    `;

    const team = rawTeamData.trim().split('\n').map(row => {
        const memberArr = row.trim().split('\t');
        return {
            name: memberArr[0],
            role: memberArr[1],
            imgPath: memberArr[2]
        };
    });

    const elTeamBox = document.getElementById("my-teamBox");

    for(member of team){
        elTeamBox.innerHTML += `
        <div class="card bg-dark text-white col-12 col-sm-6 col-md-4 border-0 mb-4 my-card">
            <img src="./img/${member.imgPath}" class="card-img shadow" alt="avatar">
            <div class="mx-1 card-img-overlay my-textOverlay d-flex justify-content-center align-items-end">
                <div>
                    <h5 class="card-title">
                        ${member.name}
                    </h5>
                    <p class="card-text">
                        ${member.role}
                    </p>
                </div>
            </div>
        </div>
    `;
    }   

    console.log(team);
}