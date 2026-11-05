import {spawn} from 'node:child_process';
const incoming=process.argv.slice(2);const args=[incoming.includes('--production')?'start':'dev'];
for(let i=0;i<incoming.length;i++){if(incoming[i]==='--production'){continue;}else if(incoming[i]==='--host'){args.push('--hostname',incoming[++i]);}else if(incoming[i]==='--strictPort'){continue;}else{args.push(incoming[i]);}}
if(!args.includes('--hostname'))args.push('--hostname','0.0.0.0');
const child=spawn(process.execPath,['node_modules/next/dist/bin/next',...args],{stdio:'inherit'});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??0));
