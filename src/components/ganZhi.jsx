
// // Function to calculate 干支 (TianGan-DiZhi) based on year
// export function getGanZhi(year) {
//     // 天干和地支列表
//     const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
//     const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  
//     // 计算干支对应的索引
//     const ganIndex = (year - 3) % 10; // 年份减3，因为干支的起始年份是甲子年（以农历1999年为例）
//     const zhiIndex = (year - 3) % 12; // 年份减3，同上
  
//     // 获取干支
//     const gan = tianGan[ganIndex];
//     const zhi = diZhi[zhiIndex];

//     
  
//     return gan + zhi;
//   }
  
const tianGanWuXing = [
  ['癸', '水'],['甲', '木'], ['乙', '木'], ['丙', '火'], ['丁', '火'], ['戊', '土'],
  ['己', '土'], ['庚', '金'], ['辛', '金'], ['壬', '水']
];

const diZhiWuXing = [
  ['亥', '水'],['子', '水'], ['丑', '土'], ['寅', '木'], ['卯', '木'], ['辰', '土'], ['巳', '火'],
  ['午', '火'], ['未', '土'], ['申', '金'], ['酉', '金'], ['戌', '土']
];

const dayTianganDizhi = [
  '甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉',
  '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未',
  '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳',
  '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯',
  '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑',
  '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'
]


const tianGan = ['癸','甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬'];
const diZhi = ['亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌' ];
const diZhiMonth = [ '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子' ]

function getWuXingCount(bazi) {
  let wuXingCount = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };

  for (let char of bazi) {
    tianGanWuXing.forEach(item => {
      if (item[0] === char) {
        wuXingCount[item[1]]++;
      }
    });

    diZhiWuXing.forEach(item => {
      if (item[0] === char) {
        wuXingCount[item[1]]++;
      }
    });
  }

  return wuXingCount;
}
function calculateValue(year, month, day) {
  let fifth = 0;

  // Determine 'fifth' based on the month
  if (month === 1 || month === 5 || month === 4) {
    fifth = 1;
  } else if (month === 7 || month === 2 || month === 6) {
    fifth = 2;
  } else if (month === 8) {
    fifth = 3;
  } else if (month === 9 || month === 10) {
    fifth = 4;
  } else if (month === 11 || month === 12) {
    fifth = 5;
  }

  // Adjust 'fifth' based on leap year conditions
  if (year % 4 === 0) {
    if (month === 1 || month === 3) {
      fifth = 0;
    } else if (month === 5 || month === 2 || month === 4) {
      fifth = 1;
    } else if (month === 7 || month === 6) {
      fifth = 2;
    } else if (month === 8) {
      fifth = 3;
    } else if (month === 9 || month === 10) {
      fifth = 4;
    } else if (month === 11 || month === 12) {
      fifth = 5;
    }
  }

  // Calculate the 'sixth' adjustment for even months
  const sixth = (month % 2 === 0) ? 30 : 0;

  // Calculate the initial result
  const first = ((year - 1900) * 5) % 60;
  const second = Math.floor((year - 1900 - (year % 4)) / 4);
  const third = 9;
  const fourth = day;

  let result = (first + second + third + fourth + fifth + sixth) % 60;

  // Calculate the final result
  const result1 = result % 10;
  const result2 = result % 12;

  return { result1, result2 };
}

// Example usage
const year = 2024;
const month = 6;
const day = 15;
const results = calculateValue(year, month, day);


// 计算八字函数
export function getGanZhi(year, month, day) {
  // 计算年柱天干和地支
  const yearTianGanIndex = (year - 3) % 10 ;
  const yearDiZhiIndex = (year - 3) % 12 ;
  const yearTianGan = tianGan[yearTianGanIndex];
  const yearDiZhi = diZhi[yearDiZhiIndex];

  // 计算月柱天干和地支
  // const monthTianGanIndex = (month + 1) % 10 ; // 月份从1开始，所以要减1
  const monthDiZhiIndex = (month -1) % 12 ;
  // const monthTianGan = tianGan[monthTianGanIndex];
  const monthDiZhi = diZhiMonth[monthDiZhiIndex];

  const yearGanToMonthGanStart = { '甲': 3, '乙': 5, '丙': 7, '丁': 9, '戊': 1, '己': 3, '庚': 5, '辛': 7, '壬': 9, '癸': 1 };
  // const yearGanToMonthGanStart = { '甲': 0, '乙': 2, '丙': 4, '丁': 6, '戊': 8, '己': 0, '庚': 2, '辛': 4, '壬': 6, '癸': 8 };

  //const monthTianGanIndex = (yearGanToMonthGanStart[yearTianGan] + month - 1) % 10;
  const monthTianGanIndex = (yearTianGanIndex * 2 + month - 1) % 10
  const monthTianGan = tianGan[monthTianGanIndex];

  // 计算日柱天干和地支
  const result = calculateValue(year, month, day);
  const dayTianGanIndex = result.result1 // 日从1开始，所以要减1
  const dayDiZhiIndex = result.result2;
  const dayTianGan = tianGan[dayTianGanIndex];
  const dayDiZhi = diZhi[dayDiZhiIndex];

  
  const dayResult = dayTianganDizhi[result]

  // 组合成八字
  const bazi = `${yearTianGan}${yearDiZhi} ${monthTianGan}${monthDiZhi} ${dayTianGan}${dayDiZhi}`;

  console.log(bazi)
  // 计算五行数量
  const wuXingCount = getWuXingCount(bazi);
  console.log(wuXingCount)

  return wuXingCount ;
}


// // 计算八字函数
// function calculateBaZi(year, month, day, hour) {
//   // 计算年柱天干和地支
//   const yearTianGanIndex = (year - 3) % 10;
//   const yearDiZhiIndex = (year - 3) % 12;
//   const yearTianGan = tianGan[yearTianGanIndex];
//   const yearDiZhi = diZhi[yearDiZhiIndex];

//   // 计算月柱天干和地支
//   const monthTianGanIndex = (month - 1) % 10; // 月份从1开始，所以要减1
//   const monthDiZhiIndex = (month - 1) % 12;
//   const monthTianGan = tianGan[monthTianGanIndex];
//   const monthDiZhi = diZhi[monthDiZhiIndex];

//   // 计算日柱天干和地支
//   const dayTianGanIndex = (day - 1) % 10; // 日从1开始，所以要减1
//   const dayDiZhiIndex = (day - 1) % 12;
//   const dayTianGan = tianGan[dayTianGanIndex];
//   const dayDiZhi = diZhi[dayDiZhiIndex];

//   // 计算时柱天干和地支
//   const hourTianGanIndex = (hour - 1) % 10; // 时辰从1开始，所以要减1
//   const hourDiZhiIndex = (hour - 1) % 12;
//   const hourTianGan = tianGan[hourTianGanIndex];
//   const hourDiZhi = diZhi[hourDiZhiIndex];

//   // 组合成八字
//   const bazi = `${yearTianGan}${yearDiZhi} ${monthTianGan}${monthDiZhi} ${dayTianGan}${dayDiZhi} ${hourTianGan}${hourDiZhi}`;

//   return bazi;
// }
