cleanSchedule = (response) => {
	// let times = timeString.split(/(?<=AM|PM)(?=\d)/g);

	// console.log(times);

	let schedule = response.rows.map((row) => {
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
				let [startTime, endTime] = cls.split('-');
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
	// let labs = schedule.filter((schedule) => schedule.classes.length === 1);
	// labs.forEach((lab) => {
	// 	const theory = schedule.find((schedule) => {
	// 		return schedule.courseCode === lab.courseCode && schedule.section === lab.section && schedule.classes.length === 2;
	// 	});
	// });

	return schedule;
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
