cleanSchedule = (response) => {
	// let times = timeString.split(/(?<=AM|PM)(?=\d)/g);

	// console.log(times);

	let schedules = response.rows.map((row) => {
		let schedule = {
			courseCode: row.cell[1],
			courseTitle: row.cell[2],
			section: row.cell[3],
			faculty: row.cell[7],
			facultyInitial: row.cell[8],
		};
		let classes = row.cell.slice(11, 18).map((cls, index) => {
			if (cls) {
				let day;
				switch (index) {
					case 0:
						day = 'Sun';
						break;
					case 1:
						day = 'Mon';
						break;
					case 2:
						day = 'Tue';
						break;
					case 3:
						day = 'Wed';
						break;
					case 4:
						day = 'Thu';
						break;
					case 5:
						day = 'Fri';
						break;
					case 6:
						day = 'Sat';
						break;
				}
				let clsSplit = cls.split('-')
				let startTime;
				let endTime;

				if(clsSplit.length ===2) {
					startTime = clsSplit[0];
					endTime = clsSplit[1];
				}else{
					let times = cls.split(/(?<=AM|PM)(?=\d)/g)
					startTime = times[0].split('-')[0]
					endTime = times[1].split('-')[1]
				}		

				return {
					day,
					startTime,
					endTime,
				};
			}
		});
		schedule.classes = classes.filter((cls) => cls);
		return schedule;
	});
	let labs = schedules.filter((schedule) => schedule.classes.length === 1);
	labs.forEach((lab, index) => {
		const theory = schedules.find((schedule) => {
			return schedule.courseCode === lab.courseCode && schedule.section === lab.section && schedule.classes.length === 2;
		});
		if (theory){
			theory.classes.push(lab.classes[0])
		}
		schedules.splice(index, 1)
	});
// 11:00 AM-12:20 PM12:30 PM-01:50 PM	
	return schedules;
};

module.exports = { cleanSchedule };
let cell = [
	'496',
	'CSE221',
	'ALGORITHMS',
	'01',
	38,
	'DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING',
	'CSE',
	'Shayekh Bin Islam',
	'SBLM',
	'27-12-2023',
	'Reserve Day 2 (27-12-2023)(09:00 AM-11:00 AM)',
	'03:30 PM-04:50 PM',
	null,
	'03:30 PM-04:50 PM',
	null,
	null,
	null,
	null,
];
