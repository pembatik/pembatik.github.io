function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5p9H0KyHQ6G":
        Script1();
        break;
      case "6NWGQlD3oyF":
        Script2();
        break;
      case "5yqbrAGbHeI":
        Script3();
        break;
      case "5iqby1JA5Oq":
        Script4();
        break;
      case "62epvBCaNZC":
        Script5();
        break;
      case "66KDNyI2OFp":
        Script6();
        break;
      case "692uE8e4PSZ":
        Script7();
        break;
      case "6OHfW5yL7Nc":
        Script8();
        break;
      case "6HVbYPWfbYt":
        Script9();
        break;
      case "6Pllbw23bwZ":
        Script10();
        break;
      case "68g4A6mnvgX":
        Script11();
        break;
      case "6lyLEVFz4Xr":
        Script12();
        break;
      case "5Y3GRwy27JH":
        Script13();
        break;
      case "5to1kdE5X6W":
        Script14();
        break;
      case "6mccbfuIM4d":
        Script15();
        break;
      case "5eo8pYLnduG":
        Script16();
        break;
      case "5itKAszcxaI":
        Script17();
        break;
      case "6Sit7tKsaw9":
        Script18();
        break;
      case "5z3hFfMMBlV":
        Script19();
        break;
      case "5W46LjjlQ96":
        Script20();
        break;
      case "5sIINfJ1lqk":
        Script21();
        break;
      case "6aAY8Nfp1oH":
        Script22();
        break;
      case "6kK0afuOioh":
        Script23();
        break;
      case "6TnvdRFsBkG":
        Script24();
        break;
      case "5oltzF7I7sv":
        Script25();
        break;
      case "5XAlF0EtmlI":
        Script26();
        break;
      case "5gkzrxvyVUX":
        Script27();
        break;
      case "6c2uQDep8oQ":
        Script28();
        break;
      case "5iSB7to3ajX":
        Script29();
        break;
      case "6KOmgmmJqMB":
        Script30();
        break;
      case "5qDblEAQNOd":
        Script31();
        break;
      case "64RWp7Xh043":
        Script32();
        break;
      case "6OMSdqvkW6x":
        Script33();
        break;
      case "5rtnXaDM3Jq":
        Script34();
        break;
      case "6rQGO8rnVws":
        Script35();
        break;
      case "5kAWnF7qPQE":
        Script36();
        break;
      case "644iXkJfrK9":
        Script37();
        break;
      case "6juHKq6NCLb":
        Script38();
        break;
      case "63JVT2mvLtb":
        Script39();
        break;
      case "6oC6R0ZKZSs":
        Script40();
        break;
      case "6l05cGZpGql":
        Script41();
        break;
      case "67wZ2AnvXnD":
        Script42();
        break;
      case "5lntBJBDTMq":
        Script43();
        break;
      case "5xvfVmlI56C":
        Script44();
        break;
      case "5XNB86P7QxP":
        Script45();
        break;
      case "5fjef2J9Scl":
        Script46();
        break;
      case "6Dop2CzyIHA":
        Script47();
        break;
      case "686tFviZWhU":
        Script48();
        break;
      case "6fsF0EFTO5S":
        Script49();
        break;
      case "5pQmAytVTk6":
        Script50();
        break;
      case "5Uo4c220gtg":
        Script51();
        break;
      case "5WWu4MobPUX":
        Script52();
        break;
      case "6EdmIldoaU1":
        Script53();
        break;
      case "5XooFGShOUm":
        Script54();
        break;
      case "6cUVDi226uf":
        Script55();
        break;
      case "6IRrKS3JDPZ":
        Script56();
        break;
      case "6iIXpYBv14z":
        Script57();
        break;
      case "5VCu96SiN8L":
        Script58();
        break;
      case "5q72ao13ISb":
        Script59();
        break;
      case "5VOpau57Kqy":
        Script60();
        break;
      case "6Erzo4aU8rg":
        Script61();
        break;
      case "6KhDo3zDehc":
        Script62();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6V4Fbgj5AtT');
const duration = 750;
const easing = 'ease-out';
const id = '68iZsGkCLcL';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6V4Fbgj5AtT');
const duration = 750;
const easing = 'ease-out';
const id = '68iZsGkCLcL_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5oNwq2veqss');
const duration = 750;
const easing = 'ease-out';
const id = '6FQbvLkOzWJ';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6BJO77PthRm');
const duration = 750;
const easing = 'ease-out';
const id = '6JBSmimg8HD';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6BJO77PthRm');
const duration = 750;
const easing = 'ease-out';
const id = '6JBSmimg8HD_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5htPcpnnUf3');
const duration = 750;
const easing = 'ease-out';
const id = '6LAdQTfx2eg';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5htPcpnnUf3');
const duration = 750;
const easing = 'ease-out';
const id = '6LAdQTfx2eg_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6k6SdYLQ4Dn');
const duration = 750;
const easing = 'ease-out';
const id = '5aYdXQ0EyWT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6k6SdYLQ4Dn');
const duration = 750;
const easing = 'ease-out';
const id = '5aYdXQ0EyWT_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5dHOgABUX3V');
const duration = 750;
const easing = 'ease-out';
const id = '5tAJUUOrsMe';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5dHOgABUX3V');
const duration = 750;
const easing = 'ease-out';
const id = '5tAJUUOrsMe_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6JCHFrFFjxS');
const duration = 750;
const easing = 'ease-out';
const id = '5aw8gFht7K8';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6JCHFrFFjxS');
const duration = 750;
const easing = 'ease-out';
const id = '5aw8gFht7K8_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6GUKc3U7s7R');
const duration = 750;
const easing = 'ease-out';
const id = '5pFKVbpTb6f';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6GUKc3U7s7R');
const duration = 750;
const easing = 'ease-out';
const id = '5pFKVbpTb6f_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('68pIDaxm5NE');
const duration = 750;
const easing = 'ease-out';
const id = '638zL3j87CH';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('68pIDaxm5NE');
const duration = 750;
const easing = 'ease-out';
const id = '638zL3j87CH_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6jMdlPawO76');
const duration = 750;
const easing = 'ease-out';
const id = '62QPXKoFELz';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6jMdlPawO76');
const duration = 750;
const easing = 'ease-out';
const id = '62QPXKoFELz_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5XRp9gRZ0MX');
const duration = 750;
const easing = 'ease-out';
const id = '5YFZtAn8WuD';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5XRp9gRZ0MX');
const duration = 750;
const easing = 'ease-out';
const id = '5YFZtAn8WuD_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6Pe5rm9UcuQ');
const duration = 750;
const easing = 'ease-out';
const id = '5h742lSijAj';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6Pe5rm9UcuQ');
const duration = 750;
const easing = 'ease-out';
const id = '5h742lSijAj_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('67Q88s8VwMU');
const duration = 750;
const easing = 'ease-out';
const id = '5r3eIhxsWGO';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('67Q88s8VwMU');
const duration = 750;
const easing = 'ease-out';
const id = '5r3eIhxsWGO_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('5yKZdAhXuEU');
const duration = 750;
const easing = 'ease-out';
const id = '62ufpGMFk3x';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5yKZdAhXuEU');
const duration = 750;
const easing = 'ease-out';
const id = '62ufpGMFk3x';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5yKZdAhXuEU');
const duration = 750;
const easing = 'ease-out';
const id = '62ufpGMFk3x_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5hO88mwjup4');
const duration = 750;
const easing = 'ease-out';
const id = '62h1U0tjEFj';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5hO88mwjup4');
const duration = 750;
const easing = 'ease-out';
const id = '62h1U0tjEFj_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('5rAVXtbzsg4');
const duration = 750;
const easing = 'ease-out';
const id = '5teqqltfEu0';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('5rAVXtbzsg4');
const duration = 750;
const easing = 'ease-out';
const id = '5teqqltfEu0_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('5rAVXtbzsg4');
const duration = 750;
const easing = 'ease-out';
const id = '5teqqltfEu0';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('5rAVXtbzsg4');
const duration = 750;
const easing = 'ease-out';
const id = '5teqqltfEu0_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('65pCfPKBYPF');
const duration = 750;
const easing = 'ease-out';
const id = '6aG6NmfjUC6';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('65pCfPKBYPF');
const duration = 750;
const easing = 'ease-out';
const id = '6aG6NmfjUC6_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5ZztQpAy46q');
const duration = 750;
const easing = 'ease-out';
const id = '6OAGTWC4sO7';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('5ZztQpAy46q');
const duration = 750;
const easing = 'ease-out';
const id = '6OAGTWC4sO7_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6E5Wv3osf30');
const duration = 750;
const easing = 'ease-out';
const id = '6fPBoh8RVTZ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('6E5Wv3osf30');
const duration = 750;
const easing = 'ease-out';
const id = '6fPBoh8RVTZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('6rCKSWsfc0J');
const duration = 750;
const easing = 'ease-out';
const id = '6FDerkdtUdF';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6rCKSWsfc0J');
const duration = 750;
const easing = 'ease-out';
const id = '6FDerkdtUdF_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6OKav9GOscF');
const duration = 750;
const easing = 'ease-out';
const id = '6mogfku3S5M';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6OKav9GOscF');
const duration = 750;
const easing = 'ease-out';
const id = '6mogfku3S5M_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6cg6Yq705rd');
const duration = 750;
const easing = 'ease-out';
const id = '6Hl9ylYhwDG';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6cg6Yq705rd');
const duration = 750;
const easing = 'ease-out';
const id = '6Hl9ylYhwDG_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6lsXQlMejP6');
const duration = 750;
const easing = 'ease-out';
const id = '5iOxkDMqnWj';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6lsXQlMejP6');
const duration = 750;
const easing = 'ease-out';
const id = '5iOxkDMqnWj_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('6Xe0fc813fH');
const duration = 750;
const easing = 'ease-out';
const id = '6fg7I2jJevQ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('6Xe0fc813fH');
const duration = 750;
const easing = 'ease-out';
const id = '6fg7I2jJevQ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('6Xe0fc813fH');
const duration = 750;
const easing = 'ease-out';
const id = '6fg7I2jJevQ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('6Xe0fc813fH');
const duration = 750;
const easing = 'ease-out';
const id = '6fg7I2jJevQ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6YzM3FXmP6Y');
const duration = 750;
const easing = 'ease-out';
const id = '5mWHtugiNUW';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6YzM3FXmP6Y');
const duration = 750;
const easing = 'ease-out';
const id = '5mWHtugiNUW_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('6dIgyAPJblB');
const duration = 750;
const easing = 'ease-out';
const id = '6Nt5tsgBJgP';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6dIgyAPJblB');
const duration = 750;
const easing = 'ease-out';
const id = '6Nt5tsgBJgP_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('5v3bLrcuESe');
const duration = 750;
const easing = 'ease-out';
const id = '5fl5hIAsEb3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('5v3bLrcuESe');
const duration = 750;
const easing = 'ease-out';
const id = '5fl5hIAsEb3_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('6PgvwJFzZHX');
const duration = 750;
const easing = 'ease-out';
const id = '5jU5RvOnOTx';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('6PgvwJFzZHX');
const duration = 750;
const easing = 'ease-out';
const id = '5jU5RvOnOTx_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  const target = object('5WAEW3LeJvA');
const duration = 750;
const easing = 'ease-out';
const id = '6X6D55FIZo5';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('5WAEW3LeJvA');
const duration = 750;
const easing = 'ease-out';
const id = '6X6D55FIZo5_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
