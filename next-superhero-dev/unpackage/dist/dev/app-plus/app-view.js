var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie-score-wrapper'])
Z([3,'bg-star'])
Z([3,'active-star'])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[2,'*'],[[7],[3,'score']],[1,10]],[1,'%']]],[1,';']])
Z([[7],[3,'showNum']])
Z([3,'movie-score'])
Z([a,[[7],[3,'score']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'black'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'handleLongPress']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([1,true])
Z([3,'carousel'])
Z(z[1])
Z([3,'__i0__'])
Z(z[2])
Z([[7],[3,'carouselList']])
Z([3,'id'])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleToDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'carousel']],[3,'movieId']])
Z([3,'aspectFit'])
Z([[6],[[7],[3,'carousel']],[3,'image']])
Z([3,'page-block super-hot'])
Z([3,'hot-title-wrapper'])
Z([3,'icon'])
Z([3,'../../static/icos/hot.png'])
Z([3,'hot-title'])
Z([3,'热门超英'])
Z([3,'page-block hot'])
Z([3,'true'])
Z([3,'__i1__'])
Z([3,'hot'])
Z([[7],[3,'hotMovies']])
Z(z[7])
Z(z[8])
Z([3,'single-poster'])
Z(z[10])
Z([[6],[[7],[3,'hot']],[3,'id']])
Z([3,'poster-wrapper'])
Z([3,'poster'])
Z([[6],[[7],[3,'hot']],[3,'poster']])
Z([3,'movie-name'])
Z([a,[[6],[[7],[3,'hot']],[3,'name']]])
Z([3,'__l'])
Z([[6],[[7],[3,'hot']],[3,'score']])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i1__']]])
Z(z[14])
Z(z[15])
Z(z[16])
Z([3,'../../static/icos/interest.png'])
Z(z[18])
Z([3,'热门预告'])
Z([3,'page-block hot-movies'])
Z([3,'__i2__'])
Z([3,'trailer'])
Z([[7],[3,'hotTrailers']])
Z(z[7])
Z(z[8])
Z([3,'hot-movie-single'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'handleVideoPlaying']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z(z[52])
Z([[6],[[7],[3,'trailer']],[3,'poster']])
Z([[6],[[7],[3,'trailer']],[3,'trailer']])
Z(z[14])
Z(z[15])
Z(z[16])
Z([3,'../../static/icos/guess-u-like.png'])
Z(z[18])
Z([3,'猜你喜欢'])
Z([3,'page-block guess-u-like'])
Z([3,'index'])
Z([3,'movie'])
Z([[7],[3,'guessLikeMovies']])
Z(z[7])
Z(z[8])
Z([3,'single-movie-like'])
Z(z[10])
Z([[6],[[7],[3,'movie']],[3,'id']])
Z(z[31])
Z([[6],[[7],[3,'movie']],[3,'cover']])
Z([3,'movie-desc'])
Z([3,'movie-title'])
Z([a,[[6],[[7],[3,'movie']],[3,'name']]])
Z(z[35])
Z([[6],[[7],[3,'movie']],[3,'score']])
Z([1,false])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'movie-info'])
Z([a,[[6],[[7],[3,'movie']],[3,'basicInfo']]])
Z(z[80])
Z([a,[[6],[[7],[3,'movie']],[3,'releaseDate']]])
Z(z[8])
Z([3,'movie-oper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handlePraiseMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([3,'praise-ico'])
Z([3,'../../static/icos/praise.png'])
Z([3,'praise-me'])
Z([3,'点赞'])
Z([[6],[[7],[3,'praiseMeAnimates']],[[7],[3,'index']]])
Z([3,'praise-me animation-opacity'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'这是个人页面'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'player'])
Z([3,'movie'])
Z([3,'myVideo'])
Z([[6],[[7],[3,'movieInfo']],[3,'poster']])
Z([[6],[[7],[3,'movieInfo']],[3,'trailer']])
Z([3,'movie-info'])
Z([[2,'+'],[1,'../cover/cover?img\x3d'],[[6],[[7],[3,'movieInfo']],[3,'cover']]])
Z([3,'cover'])
Z([[6],[[7],[3,'movieInfo']],[3,'cover']])
Z([3,'movie-desc'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'movieInfo']],[3,'name']]])
Z([3,'basic-info'])
Z([a,[[6],[[7],[3,'movieInfo']],[3,'basicInfo']]])
Z(z[13])
Z([a,[[6],[[7],[3,'movieInfo']],[3,'originalName']]])
Z(z[13])
Z([a,[[6],[[7],[3,'movieInfo']],[3,'plotDesc']]])
Z(z[13])
Z([a,[[6],[[7],[3,'movieInfo']],[3,'releaseDate']]])
Z([3,'score-block'])
Z([3,'big-score'])
Z([3,'score-words'])
Z([3,'综合评分'])
Z([3,'score-nums'])
Z([a,[[6],[[7],[3,'movieInfo']],[3,'score']]])
Z([3,'score-stars'])
Z([3,'__l'])
Z([[6],[[7],[3,'movieInfo']],[3,'score']])
Z([1,false])
Z([3,'1'])
Z([3,'prise-counts'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'movieInfo']],[3,'prisedCounts']]],[1,' 人点赞']]])
Z([3,'line-wrapper'])
Z([3,'line'])
Z([3,'plots-block'])
Z([3,'plots-title'])
Z([3,'剧情详情'])
Z([3,'plots-desc'])
Z([a,z[18][1]])
Z([3,'scroll-block'])
Z(z[37])
Z([3,'演职人员'])
Z([3,'scroll-list'])
Z([3,'true'])
Z([3,'index'])
Z([3,'director'])
Z([[7],[3,'directors']])
Z([3,'staffId'])
Z([3,'actor-wrapper'])
Z([3,'__e'])
Z([3,'single-actor'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleStaffImgPreview']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'director']],[3,'photo']])
Z([3,'actor-name'])
Z([a,[[6],[[7],[3,'director']],[3,'name']]])
Z([3,'actor-role'])
Z([a,[[6],[[7],[3,'director']],[3,'actName']]])
Z(z[46])
Z([3,'actor'])
Z([[7],[3,'actors']])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[52])
Z(z[53])
Z([[2,'+'],[[7],[3,'index']],[[6],[[7],[3,'directors']],[3,'length']]])
Z(z[55])
Z([[6],[[7],[3,'actor']],[3,'photo']])
Z(z[57])
Z([a,[[6],[[7],[3,'actor']],[3,'name']]])
Z(z[59])
Z([a,[[6],[[7],[3,'actor']],[3,'actName']]])
Z(z[41])
Z(z[37])
Z([3,'剧照'])
Z(z[44])
Z(z[45])
Z(z[46])
Z([3,'img'])
Z([[6],[[7],[3,'movieInfo']],[3,'plotPics']])
Z([3,'*this'])
Z(z[51])
Z([3,'plot-image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleImgPreview']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[54])
Z(z[55])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'search-block'])
Z([3,'search-ico-wrapper'])
Z([3,'search-ico'])
Z([3,'../../static/icos/search.png'])
Z([3,'__e'])
Z([3,'search-text'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'handleConfirmSearch']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'10'])
Z([3,'搜索预告'])
Z([3,'text'])
Z([3,'movie-list page-block'])
Z([3,'__i0__'])
Z([3,'movie'])
Z([[7],[3,'movieList']])
Z([3,'id'])
Z([3,'movie-wrapper'])
Z(z[5])
Z([3,'poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleToDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'movie']],[3,'id']])
Z([[6],[[7],[3,'movie']],[3,'poster']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/trailerStars.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/movie/movie.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',1,e,s,gg)
var fE=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
_(oD,fE)
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
var cF=_n('text')
_rz(z,cF,'class',5,e,s,gg)
var hG=_oz(z,6,e,s,gg)
_(cF,hG)
_(xC,cF)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cI=_n('view')
_rz(z,cI,'class',0,e,s,gg)
var oJ=_mz(z,'image',['bindlongpress',1,'data-event-opts',1,'mode',2,'src',3],[],e,s,gg)
_(cI,oJ)
_(r,cI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_mz(z,'swiper',['autoplay',1,'class',1,'indicatorDots',2],[],e,s,gg)
var eN=_v()
_(tM,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_n('swiper-item')
var hU=_mz(z,'image',['bindtap',8,'class',1,'data-event-opts',2,'data-movieid',3,'mode',4,'src',5],[],xQ,oP,gg)
_(cT,hU)
_(oR,cT)
return oR
}
eN.wxXCkey=2
_2z(z,6,bO,e,s,gg,eN,'carousel','__i0__','id')
_(aL,tM)
var oV=_n('view')
_rz(z,oV,'class',14,e,s,gg)
var cW=_n('view')
_rz(z,cW,'class',15,e,s,gg)
var oX=_mz(z,'image',['class',16,'src',1],[],e,s,gg)
_(cW,oX)
var lY=_n('view')
_rz(z,lY,'class',18,e,s,gg)
var aZ=_oz(z,19,e,s,gg)
_(lY,aZ)
_(cW,lY)
_(oV,cW)
_(aL,oV)
var t1=_mz(z,'scroll-view',['class',20,'scrollX',1],[],e,s,gg)
var e2=_v()
_(t1,e2)
var b3=function(x5,o4,o6,gg){
var c8=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2,'data-movieid',3],[],x5,o4,gg)
var h9=_n('view')
_rz(z,h9,'class',30,x5,o4,gg)
var o0=_mz(z,'image',['mode',-1,'class',31,'src',1],[],x5,o4,gg)
_(h9,o0)
var cAB=_n('view')
_rz(z,cAB,'class',33,x5,o4,gg)
var oBB=_oz(z,34,x5,o4,gg)
_(cAB,oBB)
_(h9,cAB)
var lCB=_mz(z,'trailer-stars',['bind:__l',35,'score',1,'vueId',2],[],x5,o4,gg)
_(h9,lCB)
_(c8,h9)
_(o6,c8)
return o6
}
e2.wxXCkey=4
_2z(z,24,b3,e,s,gg,e2,'hot','__i1__','id')
_(aL,t1)
var aDB=_n('view')
_rz(z,aDB,'class',38,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',39,e,s,gg)
var eFB=_mz(z,'image',['class',40,'src',1],[],e,s,gg)
_(tEB,eFB)
var bGB=_n('view')
_rz(z,bGB,'class',42,e,s,gg)
var oHB=_oz(z,43,e,s,gg)
_(bGB,oHB)
_(tEB,bGB)
_(aDB,tEB)
_(aL,aDB)
var xIB=_n('view')
_rz(z,xIB,'class',44,e,s,gg)
var oJB=_v()
_(xIB,oJB)
var fKB=function(hMB,cLB,oNB,gg){
var oPB=_mz(z,'video',['controls',-1,'bindplay',49,'class',1,'data-event-opts',2,'data-playinIndex',3,'id',4,'poster',5,'src',6],[],hMB,cLB,gg)
_(oNB,oPB)
return oNB
}
oJB.wxXCkey=2
_2z(z,47,fKB,e,s,gg,oJB,'trailer','__i2__','id')
_(aL,xIB)
var lQB=_n('view')
_rz(z,lQB,'class',56,e,s,gg)
var aRB=_n('view')
_rz(z,aRB,'class',57,e,s,gg)
var tSB=_mz(z,'image',['class',58,'src',1],[],e,s,gg)
_(aRB,tSB)
var eTB=_n('view')
_rz(z,eTB,'class',60,e,s,gg)
var bUB=_oz(z,61,e,s,gg)
_(eTB,bUB)
_(aRB,eTB)
_(lQB,aRB)
_(aL,lQB)
var oVB=_n('view')
_rz(z,oVB,'class',62,e,s,gg)
var xWB=_v()
_(oVB,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_mz(z,'view',['bindtap',67,'class',1,'data-event-opts',2,'data-movieid',3],[],cZB,fYB,gg)
var o4B=_mz(z,'image',['mode',-1,'class',71,'src',1],[],cZB,fYB,gg)
_(c3B,o4B)
var l5B=_n('view')
_rz(z,l5B,'class',73,cZB,fYB,gg)
var a6B=_n('view')
_rz(z,a6B,'class',74,cZB,fYB,gg)
var t7B=_oz(z,75,cZB,fYB,gg)
_(a6B,t7B)
_(l5B,a6B)
var e8B=_mz(z,'trailer-stars',['bind:__l',76,'score',1,'showNum',2,'vueId',3],[],cZB,fYB,gg)
_(l5B,e8B)
var b9B=_n('view')
_rz(z,b9B,'class',80,cZB,fYB,gg)
var o0B=_oz(z,81,cZB,fYB,gg)
_(b9B,o0B)
_(l5B,b9B)
var xAC=_n('view')
_rz(z,xAC,'class',82,cZB,fYB,gg)
var oBC=_oz(z,83,cZB,fYB,gg)
_(xAC,oBC)
_(l5B,xAC)
_(c3B,l5B)
var fCC=_mz(z,'view',['bindtap',84,'class',1,'data-event-opts',2,'data-index',3],[],cZB,fYB,gg)
var cDC=_mz(z,'image',['mode',-1,'class',88,'src',1],[],cZB,fYB,gg)
_(fCC,cDC)
var hEC=_n('view')
_rz(z,hEC,'class',90,cZB,fYB,gg)
var oFC=_oz(z,91,cZB,fYB,gg)
_(hEC,oFC)
_(fCC,hEC)
var cGC=_mz(z,'view',['animation',92,'class',1],[],cZB,fYB,gg)
var oHC=_oz(z,94,cZB,fYB,gg)
_(cGC,oHC)
_(fCC,cGC)
_(c3B,fCC)
_(h1B,c3B)
return h1B
}
xWB.wxXCkey=4
_2z(z,65,oXB,e,s,gg,xWB,'movie','index','id')
_(aL,oVB)
_(r,aL)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var aJC=_n('view')
var tKC=_oz(z,0,e,s,gg)
_(aJC,tKC)
_(r,aJC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bMC=_n('view')
_rz(z,bMC,'class',0,e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',1,e,s,gg)
var xOC=_mz(z,'video',['controls',-1,'class',2,'id',1,'poster',2,'src',3],[],e,s,gg)
_(oNC,xOC)
_(bMC,oNC)
var oPC=_n('view')
_rz(z,oPC,'class',6,e,s,gg)
var fQC=_n('navigator')
_rz(z,fQC,'url',7,e,s,gg)
var cRC=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
var hSC=_n('view')
_rz(z,hSC,'class',10,e,s,gg)
var oTC=_n('view')
_rz(z,oTC,'class',11,e,s,gg)
var cUC=_oz(z,12,e,s,gg)
_(oTC,cUC)
_(hSC,oTC)
var oVC=_n('view')
_rz(z,oVC,'class',13,e,s,gg)
var lWC=_oz(z,14,e,s,gg)
_(oVC,lWC)
_(hSC,oVC)
var aXC=_n('view')
_rz(z,aXC,'class',15,e,s,gg)
var tYC=_oz(z,16,e,s,gg)
_(aXC,tYC)
_(hSC,aXC)
var eZC=_n('view')
_rz(z,eZC,'class',17,e,s,gg)
var b1C=_oz(z,18,e,s,gg)
_(eZC,b1C)
_(hSC,eZC)
var o2C=_n('view')
_rz(z,o2C,'class',19,e,s,gg)
var x3C=_oz(z,20,e,s,gg)
_(o2C,x3C)
_(hSC,o2C)
var o4C=_n('view')
_rz(z,o4C,'class',21,e,s,gg)
var f5C=_n('view')
_rz(z,f5C,'class',22,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',23,e,s,gg)
var h7C=_oz(z,24,e,s,gg)
_(c6C,h7C)
_(f5C,c6C)
var o8C=_n('view')
_rz(z,o8C,'class',25,e,s,gg)
var c9C=_oz(z,26,e,s,gg)
_(o8C,c9C)
_(f5C,o8C)
_(o4C,f5C)
var o0C=_n('view')
_rz(z,o0C,'class',27,e,s,gg)
var lAD=_mz(z,'trailer-stars',['bind:__l',28,'score',1,'showNum',2,'vueId',3],[],e,s,gg)
_(o0C,lAD)
var aBD=_n('view')
_rz(z,aBD,'class',32,e,s,gg)
var tCD=_oz(z,33,e,s,gg)
_(aBD,tCD)
_(o0C,aBD)
_(o4C,o0C)
_(hSC,o4C)
_(oPC,hSC)
_(bMC,oPC)
var eDD=_n('view')
_rz(z,eDD,'class',34,e,s,gg)
var bED=_n('view')
_rz(z,bED,'class',35,e,s,gg)
_(eDD,bED)
_(bMC,eDD)
var oFD=_n('view')
_rz(z,oFD,'class',36,e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',37,e,s,gg)
var oHD=_oz(z,38,e,s,gg)
_(xGD,oHD)
_(oFD,xGD)
var fID=_n('view')
_rz(z,fID,'class',39,e,s,gg)
var cJD=_oz(z,40,e,s,gg)
_(fID,cJD)
_(oFD,fID)
_(bMC,oFD)
var hKD=_n('view')
_rz(z,hKD,'class',41,e,s,gg)
var oLD=_n('view')
_rz(z,oLD,'class',42,e,s,gg)
var cMD=_oz(z,43,e,s,gg)
_(oLD,cMD)
_(hKD,oLD)
var oND=_mz(z,'scroll-view',['class',44,'scrollX',1],[],e,s,gg)
var lOD=_v()
_(oND,lOD)
var aPD=function(eRD,tQD,bSD,gg){
var xUD=_n('view')
_rz(z,xUD,'class',50,eRD,tQD,gg)
var oVD=_mz(z,'image',['bindtap',51,'class',1,'data-event-opts',2,'data-index',3,'mode',4,'src',5],[],eRD,tQD,gg)
_(xUD,oVD)
var fWD=_n('view')
_rz(z,fWD,'class',57,eRD,tQD,gg)
var cXD=_oz(z,58,eRD,tQD,gg)
_(fWD,cXD)
_(xUD,fWD)
var hYD=_n('view')
_rz(z,hYD,'class',59,eRD,tQD,gg)
var oZD=_oz(z,60,eRD,tQD,gg)
_(hYD,oZD)
_(xUD,hYD)
_(bSD,xUD)
return bSD
}
lOD.wxXCkey=2
_2z(z,48,aPD,e,s,gg,lOD,'director','index','staffId')
var c1D=_v()
_(oND,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_n('view')
_rz(z,b7D,'class',65,a4D,l3D,gg)
var o8D=_mz(z,'image',['bindtap',66,'class',1,'data-event-opts',2,'data-index',3,'mode',4,'src',5],[],a4D,l3D,gg)
_(b7D,o8D)
var x9D=_n('view')
_rz(z,x9D,'class',72,a4D,l3D,gg)
var o0D=_oz(z,73,a4D,l3D,gg)
_(x9D,o0D)
_(b7D,x9D)
var fAE=_n('view')
_rz(z,fAE,'class',74,a4D,l3D,gg)
var cBE=_oz(z,75,a4D,l3D,gg)
_(fAE,cBE)
_(b7D,fAE)
_(t5D,b7D)
return t5D
}
c1D.wxXCkey=2
_2z(z,63,o2D,e,s,gg,c1D,'actor','index','staffId')
_(hKD,oND)
_(bMC,hKD)
var hCE=_n('view')
_rz(z,hCE,'class',76,e,s,gg)
var oDE=_n('view')
_rz(z,oDE,'class',77,e,s,gg)
var cEE=_oz(z,78,e,s,gg)
_(oDE,cEE)
_(hCE,oDE)
var oFE=_mz(z,'scroll-view',['class',79,'scrollX',1],[],e,s,gg)
var lGE=_v()
_(oFE,lGE)
var aHE=function(eJE,tIE,bKE,gg){
var xME=_mz(z,'image',['bindtap',85,'class',1,'data-event-opts',2,'data-index',3,'mode',4,'src',5],[],eJE,tIE,gg)
_(bKE,xME)
return bKE
}
lGE.wxXCkey=2
_2z(z,83,aHE,e,s,gg,lGE,'img','index','*this')
_(hCE,oFE)
_(bMC,hCE)
_(r,bMC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var fOE=_n('view')
_rz(z,fOE,'class',0,e,s,gg)
var cPE=_n('view')
_rz(z,cPE,'class',1,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',2,e,s,gg)
var oRE=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(hQE,oRE)
_(cPE,hQE)
var cSE=_mz(z,'input',['focus',-1,'bindconfirm',5,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6],[],e,s,gg)
_(cPE,cSE)
_(fOE,cPE)
var oTE=_n('view')
_rz(z,oTE,'class',12,e,s,gg)
var lUE=_v()
_(oTE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_n('view')
_rz(z,x1E,'class',17,eXE,tWE,gg)
var o2E=_mz(z,'image',['bindtap',18,'class',1,'data-event-opts',2,'data-movieid',3,'src',4],[],eXE,tWE,gg)
_(x1E,o2E)
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=2
_2z(z,15,aVE,e,s,gg,lUE,'movie','__i0__','id')
_(fOE,oTE)
_(r,fOE)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\n.",[1],"page { width: 100%; height: 100%; background: #f7f7f7; }\n.",[1],"page-block { background-color: #fff; }\n.",[1],"line-wrapper { padding: 0 ",[0,20],"; }\n.",[1],"line { height: 1px; background: #dbdbda; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/trailerStars.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"movie-score-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"movie-score-wrapper .",[1],"bg-star { width: 50px; height: 10px; margin-top: ",[0,6],"; background: url(data:image/png;base64,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\x3d\x3d); background-size: 10px 10px; position: relative; }\n.",[1],"movie-score-wrapper .",[1],"bg-star .",[1],"active-star { position: absolute; top: 0px; left: 0px; height: 100%; background: url(data:image/png;base64,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\x3d); background-size: 10px 10px; }\n.",[1],"movie-score-wrapper .",[1],"star { width: ",[0,20],"; height: ",[0,20],"; margin-top: ",[0,6],"; }\n.",[1],"movie-score-wrapper .",[1],"movie-score { font-size: 12px; color: gray; margin-left: ",[0,8],"; }\n",],undefined,{path:"./components/trailerStars.wxss"});    
__wxAppCode__['components/trailerStars.wxml']=$gwx('./components/trailerStars.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black{ background: #000; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"carousel { width: 100%; height: ",[0,440],"; }\n.",[1],"super-hot{ margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"icon { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"hot-title-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hot-title{ font-size: 20px; margin-left: ",[0,20],"; font-weight: bold; }\n.",[1],"hot{ width: 100%; white-space: nowrap; }\n.",[1],"single-poster { display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"single-poster:last-child{ margin-right: ",[0,20],"; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-name { width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: bold; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"hot-movies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; }\n.",[1],"hot-movie-single{ width: ",[0,350],"; height: ",[0,220],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like{ padding: ",[0,30]," ",[0,20],"; }\n.",[1],"single-movie-like{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-bottom: ",[0,20],"; }\n.",[1],"single-movie-like .",[1],"poster{ width: ",[0,180],"; height: ",[0,240],"; border-radius: 3%; }\n.",[1],"movie-desc{ width: ",[0,340],"; }\n.",[1],"movie-title{ overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-info{ color: #808080; font-size: 14px; }\n.",[1],"movie-oper{ width: ",[0,140],"; height: ",[0,220],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; border-left: 2px dashed #ddd; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"praise-ico{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"praise-me{ font-size: 14px; color: #feab2a; }\n.",[1],"animation-opacity{ font-weight: bold; opacity: 0; -webkit-transform: translateY(-30px); -ms-transform: translateY(-30px); transform: translateY(-30px); }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=undefined;    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"movie{ width: 100%; height: ",[0,440],"; }\n.",[1],"player { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: black; }\n.",[1],"movie-info{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background: #f7f4f9; padding: ",[0,40]," ",[0,20],"; }\n.",[1],"cover{ width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie-desc{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-left: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,400],"; }\n.",[1],"title{ font-size: 30px; }\n.",[1],"basic-info{ color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score-block{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #fff; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; padding: ",[0,20],"; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score-words{ font-size: 12px; color: grey; }\n.",[1],"score-nums{ font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #FEAB2A; line-height: ",[0,60],"; }\n.",[1],"prise-counts{ font-size: 12px; color: grey; line-height: ",[0,40],"; }\n.",[1],"plots-block{ background: #f2f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots-title{ color: #A9A9A9; font-size: 14px; }\n.",[1],"plots-desc{ margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll-block{ background: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll-list{ width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"plot-image{ width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],"; }\n.",[1],"single-actor{ width: ",[0,170],"; height: ",[0,240],"; margin-right: ",[0,10],"; }\n.",[1],"actor-wrapper{ display: inline-block; }\n.",[1],"actor-name{ width: ",[0,170],"; text-align: center; font-size: 15px; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor-role{ width: ",[0,170],"; text-align: center; color: #a9a9a9; font-size: 13px; }\n",],undefined,{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search-ico{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"search-ico-wrapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #eaeaea; height: ",[0,60],"; }\n.",[1],"search-text{ font-size: 14ox; background: #eaeaea; height: ",[0,60],"; width: ",[0,650],"; }\n.",[1],"search-block{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; padding-bottom: ",[0,20],"; position: fixed; top: 0; background: #f8f8f8; z-index: 100; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,80]," ",[0,30]," 0; }\n.",[1],"movie-wrapper{ margin-bottom: ",[0,20],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
