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
Z([3,'page page-fill'])
Z([3,'page-body uni-content-info'])
Z([3,'cropper-content'])
Z([[7],[3,'isShowImg']])
Z([3,'uni-corpper myDistance'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperInitW']]],[1,'px;height:']],[[7],[3,'cropperInitH']]],[1,'px;background:#000']])
Z([3,'uni-corpper-content'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px;left:']],[[7],[3,'cropperL']]],[1,'px;top:']],[[7],[3,'cropperT']]],[1,'px']])
Z([3,'myImage'])
Z([[7],[3,'imageSrc']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px']])
Z([3,'__e'])
Z(z[11])
Z(z[11])
Z([3,'uni-corpper-crop-box'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'contentStartMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'contentMoveing']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'contentTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'left:'],[[7],[3,'cutL']]],[1,'px;top:']],[[7],[3,'cutT']]],[1,'px;right:']],[[7],[3,'cutR']]],[1,'px;bottom:']],[[7],[3,'cutB']]],[1,'px']])
Z([3,'uni-cropper-view-box'])
Z([3,'uni-cropper-dashed-h'])
Z([3,'uni-cropper-dashed-v'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-t'])
Z([3,'top'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-r'])
Z([3,'right'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-b'])
Z([3,'bottom'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-l'])
Z([3,'left'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-t'])
Z(z[23])
Z(z[24])
Z([3,'uni-cropper-point point-tr'])
Z([3,'topTight'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-r'])
Z(z[28])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-rb'])
Z([3,'rightBottom'])
Z(z[24])
Z(z[11])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-b'])
Z(z[33])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'dragEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'uni-cropper-point point-bl'])
Z([3,'bottomLeft'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-l'])
Z(z[38])
Z(z[24])
Z([3,'uni-cropper-point point-lt'])
Z([3,'leftTop'])
Z([3,'footer-opertor'])
Z(z[11])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[11])
Z(z[74])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImageInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
Z([3,'myCanvas'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'position:absolute;border: 1px solid red; width:'],[[7],[3,'imageW']]],[1,'px;height:']],[[7],[3,'imageH']]],[1,'px;top:-9999px;left:-9999px;']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'face'])
Z([[6],[[7],[3,'userInfo']],[3,'faceImage']])
Z([3,'info-wapper'])
Z([3,'nickname'])
Z([a,[[6],[[7],[3,'userInfo']],[3,'nickname']]])
Z([3,'nav-info'])
Z([a,[[2,'+'],[1,'ID:'],[[6],[[7],[3,'userInfo']],[3,'id']]]])
Z([3,'set-wrapper'])
Z([3,'../meInfo/meInfo'])
Z([3,'settings'])
Z([3,'../../static/icos/settings.png'])
Z(z[3])
Z([3,'http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png'])
Z([3,'../registLogin/registLogin'])
Z([3,'nickname regist-login'])
Z([3,'注册/登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'pending-wapper'])
Z([3,'pending-face'])
Z([3,'face'])
Z([3,'scaleToFill'])
Z([[7],[3,'tempFace']])
Z([3,'notice'])
Z([3,'notice-words'])
Z([3,'* 请从相册中选择等比宽高的图片噢~'])
Z([3,'footer-opertor'])
Z([3,'__e'])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePendingFace']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'page-block info-list'])
Z([3,'item-wapper face-line-upbottom'])
Z([3,'info-words'])
Z([3,'头像'])
Z([3,'__e'])
Z([3,'right-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleShowOpr']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face'])
Z([[6],[[7],[3,'userInfo']],[3,'faceImage']])
Z([3,'arrow-block'])
Z([3,'arrow-ico'])
Z([3,'../../static/icos/left-gray-arrow.png'])
Z([3,'line-top'])
Z([3,'line'])
Z(z[5])
Z([3,'item-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleEditNickName']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'昵称'])
Z(z[6])
Z([3,'gray-fields'])
Z([a,[[6],[[7],[3,'userInfo']],[3,'nickname']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[16])
Z(z[3])
Z([3,'生日'])
Z(z[6])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'handleBirthDayChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([[6],[[7],[3,'userInfo']],[3,'birthday']])
Z(z[21])
Z([a,[[6],[[7],[3,'userInfo']],[3,'birthday']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[16])
Z(z[3])
Z([3,'性别'])
Z(z[6])
Z(z[21])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'handleSexChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'selector'])
Z([[7],[3,'sexRange']])
Z([3,'name'])
Z([[6],[[7],[3,'userInfo']],[3,'sex']])
Z([[2,'=='],[[6],[[7],[3,'userInfo']],[3,'sex']],[1,1]])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'userInfo']],[3,'sex']],[1,0]])
Z([3,'女'])
Z([3,'未选择'])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'footer-wapper'])
Z(z[5])
Z([3,'footer-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[5])
Z(z[64])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitNickname']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block'])
Z([3,'margin-top:20rpx;'])
Z([3,'input'])
Z([3,'10'])
Z([3,'nickname'])
Z([3,'请输入昵称'])
Z([3,'graywords'])
Z([3,'text'])
Z([[6],[[7],[3,'userInfo']],[3,'nickname']])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'handleFormSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face-wapper'])
Z([3,'face'])
Z([3,'../../static/icos/default-face.png'])
Z([3,'info-wapper'])
Z([3,'words-lbl'])
Z([3,'账号'])
Z([3,'input'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z([3,'graywords'])
Z([3,'text'])
Z([3,''])
Z(z[6])
Z(z[7])
Z([3,'密码'])
Z(z[9])
Z([3,'password'])
Z([3,'请输入密码'])
Z(z[12])
Z(z[19])
Z(z[14])
Z([3,'submit'])
Z([3,'margin-top:60rpx;width:90%;'])
Z([3,'primary'])
Z([3,'注册/登录'])
Z([3,'third-wapper'])
Z([3,'third-line'])
Z([3,'single-line'])
Z([3,'line'])
Z([3,'third-words'])
Z([3,'第三方账号登录'])
Z(z[30])
Z(z[31])
Z([3,'third-icos-wapper'])
Z(z[1])
Z([3,'third-ico'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/icos/weixin.png'])
Z(z[1])
Z(z[38])
Z(z[39])
Z([3,'qq'])
Z([3,'../../static/icos/QQ.png'])
Z([3,'margin-left:80rpx;'])
Z(z[1])
Z(z[38])
Z(z[39])
Z([3,'sinaweibo'])
Z([3,'../../static/icos/weibo.png'])
Z(z[47])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/trailerStars.wxml','./pages/cover/cover.wxml','./pages/faceCrop/faceCrop.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/meNickName/meNickName.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/search/search.wxml'];d_[x[0]]={}
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
var tM=_n('view')
_rz(z,tM,'class',1,e,s,gg)
var eN=_n('view')
_rz(z,eN,'class',2,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
var oP=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var xQ=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var oR=_mz(z,'image',['class',8,'src',1,'style',2],[],e,s,gg)
_(xQ,oR)
var fS=_mz(z,'view',['catchtouchend',11,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',17,e,s,gg)
var hU=_n('view')
_rz(z,hU,'class',18,e,s,gg)
_(cT,hU)
var oV=_n('view')
_rz(z,oV,'class',19,e,s,gg)
_(cT,oV)
var cW=_mz(z,'view',['catchtouchmove',20,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,cW)
var oX=_mz(z,'view',['catchtouchmove',25,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,oX)
var lY=_mz(z,'view',['catchtouchmove',30,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,lY)
var aZ=_mz(z,'view',['catchtouchmove',35,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,aZ)
var t1=_mz(z,'view',['catchtouchmove',40,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,t1)
var e2=_mz(z,'view',['class',45,'data-drag',1],[],e,s,gg)
_(cT,e2)
var b3=_mz(z,'view',['catchtouchmove',47,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,b3)
var o4=_mz(z,'view',['catchtouchmove',52,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,o4)
var x5=_mz(z,'view',['catchtouchend',57,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-drag',4,'data-event-opts',5],[],e,s,gg)
_(cT,x5)
var o6=_mz(z,'view',['class',63,'data-drag',1],[],e,s,gg)
_(cT,o6)
var f7=_mz(z,'view',['catchtouchmove',65,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(cT,f7)
var c8=_mz(z,'view',['class',70,'data-drag',1],[],e,s,gg)
_(cT,c8)
_(fS,cT)
_(xQ,fS)
_(oP,xQ)
_(bO,oP)
}
bO.wxXCkey=1
_(tM,eN)
var h9=_n('view')
_rz(z,h9,'class',72,e,s,gg)
var o0=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_oz(z,76,e,s,gg)
_(o0,cAB)
_(h9,o0)
var oBB=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],e,s,gg)
var lCB=_oz(z,80,e,s,gg)
_(oBB,lCB)
_(h9,oBB)
_(tM,h9)
var aDB=_mz(z,'canvas',['canvasId',81,'style',1],[],e,s,gg)
_(tM,aDB)
_(aL,tM)
_(r,aL)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var eFB=_n('view')
_rz(z,eFB,'class',0,e,s,gg)
var bGB=_mz(z,'swiper',['autoplay',1,'class',1,'indicatorDots',2],[],e,s,gg)
var oHB=_v()
_(bGB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_n('swiper-item')
var cOB=_mz(z,'image',['bindtap',8,'class',1,'data-event-opts',2,'data-movieid',3,'mode',4,'src',5],[],fKB,oJB,gg)
_(oNB,cOB)
_(cLB,oNB)
return cLB
}
oHB.wxXCkey=2
_2z(z,6,xIB,e,s,gg,oHB,'carousel','__i0__','id')
_(eFB,bGB)
var oPB=_n('view')
_rz(z,oPB,'class',14,e,s,gg)
var lQB=_n('view')
_rz(z,lQB,'class',15,e,s,gg)
var aRB=_mz(z,'image',['class',16,'src',1],[],e,s,gg)
_(lQB,aRB)
var tSB=_n('view')
_rz(z,tSB,'class',18,e,s,gg)
var eTB=_oz(z,19,e,s,gg)
_(tSB,eTB)
_(lQB,tSB)
_(oPB,lQB)
_(eFB,oPB)
var bUB=_mz(z,'scroll-view',['class',20,'scrollX',1],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
var xWB=function(fYB,oXB,cZB,gg){
var o2B=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2,'data-movieid',3],[],fYB,oXB,gg)
var c3B=_n('view')
_rz(z,c3B,'class',30,fYB,oXB,gg)
var o4B=_mz(z,'image',['mode',-1,'class',31,'src',1],[],fYB,oXB,gg)
_(c3B,o4B)
var l5B=_n('view')
_rz(z,l5B,'class',33,fYB,oXB,gg)
var a6B=_oz(z,34,fYB,oXB,gg)
_(l5B,a6B)
_(c3B,l5B)
var t7B=_mz(z,'trailer-stars',['bind:__l',35,'score',1,'vueId',2],[],fYB,oXB,gg)
_(c3B,t7B)
_(o2B,c3B)
_(cZB,o2B)
return cZB
}
oVB.wxXCkey=4
_2z(z,24,xWB,e,s,gg,oVB,'hot','__i1__','id')
_(eFB,bUB)
var e8B=_n('view')
_rz(z,e8B,'class',38,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',39,e,s,gg)
var o0B=_mz(z,'image',['class',40,'src',1],[],e,s,gg)
_(b9B,o0B)
var xAC=_n('view')
_rz(z,xAC,'class',42,e,s,gg)
var oBC=_oz(z,43,e,s,gg)
_(xAC,oBC)
_(b9B,xAC)
_(e8B,b9B)
_(eFB,e8B)
var fCC=_n('view')
_rz(z,fCC,'class',44,e,s,gg)
var cDC=_v()
_(fCC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_mz(z,'video',['controls',-1,'bindplay',49,'class',1,'data-event-opts',2,'data-playinIndex',3,'id',4,'poster',5,'src',6],[],cGC,oFC,gg)
_(oHC,aJC)
return oHC
}
cDC.wxXCkey=2
_2z(z,47,hEC,e,s,gg,cDC,'trailer','__i2__','id')
_(eFB,fCC)
var tKC=_n('view')
_rz(z,tKC,'class',56,e,s,gg)
var eLC=_n('view')
_rz(z,eLC,'class',57,e,s,gg)
var bMC=_mz(z,'image',['class',58,'src',1],[],e,s,gg)
_(eLC,bMC)
var oNC=_n('view')
_rz(z,oNC,'class',60,e,s,gg)
var xOC=_oz(z,61,e,s,gg)
_(oNC,xOC)
_(eLC,oNC)
_(tKC,eLC)
_(eFB,tKC)
var oPC=_n('view')
_rz(z,oPC,'class',62,e,s,gg)
var fQC=_v()
_(oPC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_mz(z,'view',['bindtap',67,'class',1,'data-event-opts',2,'data-movieid',3],[],oTC,hSC,gg)
var aXC=_mz(z,'image',['mode',-1,'class',71,'src',1],[],oTC,hSC,gg)
_(lWC,aXC)
var tYC=_n('view')
_rz(z,tYC,'class',73,oTC,hSC,gg)
var eZC=_n('view')
_rz(z,eZC,'class',74,oTC,hSC,gg)
var b1C=_oz(z,75,oTC,hSC,gg)
_(eZC,b1C)
_(tYC,eZC)
var o2C=_mz(z,'trailer-stars',['bind:__l',76,'score',1,'showNum',2,'vueId',3],[],oTC,hSC,gg)
_(tYC,o2C)
var x3C=_n('view')
_rz(z,x3C,'class',80,oTC,hSC,gg)
var o4C=_oz(z,81,oTC,hSC,gg)
_(x3C,o4C)
_(tYC,x3C)
var f5C=_n('view')
_rz(z,f5C,'class',82,oTC,hSC,gg)
var c6C=_oz(z,83,oTC,hSC,gg)
_(f5C,c6C)
_(tYC,f5C)
_(lWC,tYC)
var h7C=_mz(z,'view',['bindtap',84,'class',1,'data-event-opts',2,'data-index',3],[],oTC,hSC,gg)
var o8C=_mz(z,'image',['mode',-1,'class',88,'src',1],[],oTC,hSC,gg)
_(h7C,o8C)
var c9C=_n('view')
_rz(z,c9C,'class',90,oTC,hSC,gg)
var o0C=_oz(z,91,oTC,hSC,gg)
_(c9C,o0C)
_(h7C,c9C)
var lAD=_mz(z,'view',['animation',92,'class',1],[],oTC,hSC,gg)
var aBD=_oz(z,94,oTC,hSC,gg)
_(lAD,aBD)
_(h7C,lAD)
_(lWC,h7C)
_(cUC,lWC)
return cUC
}
fQC.wxXCkey=4
_2z(z,65,cRC,e,s,gg,fQC,'movie','index','id')
_(eFB,oPC)
_(r,eFB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var bED=_n('view')
_rz(z,bED,'class',1,e,s,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,2,e,s,gg)){oFD.wxVkey=1
var xGD=_mz(z,'image',['mode',-1,'class',3,'src',1],[],e,s,gg)
_(oFD,xGD)
var oHD=_n('view')
_rz(z,oHD,'class',5,e,s,gg)
var fID=_n('view')
_rz(z,fID,'class',6,e,s,gg)
var cJD=_oz(z,7,e,s,gg)
_(fID,cJD)
_(oHD,fID)
var hKD=_n('view')
_rz(z,hKD,'class',8,e,s,gg)
var oLD=_oz(z,9,e,s,gg)
_(hKD,oLD)
_(oHD,hKD)
_(oFD,oHD)
var cMD=_n('view')
_rz(z,cMD,'class',10,e,s,gg)
var oND=_n('navigator')
_rz(z,oND,'url',11,e,s,gg)
var lOD=_mz(z,'image',['mode',-1,'class',12,'src',1],[],e,s,gg)
_(oND,lOD)
_(cMD,oND)
_(oFD,cMD)
}
else{oFD.wxVkey=2
var aPD=_mz(z,'image',['mode',-1,'class',14,'src',1],[],e,s,gg)
_(oFD,aPD)
var tQD=_n('navigator')
_rz(z,tQD,'url',16,e,s,gg)
var eRD=_n('view')
_rz(z,eRD,'class',17,e,s,gg)
var bSD=_oz(z,18,e,s,gg)
_(eRD,bSD)
_(tQD,eRD)
_(oFD,tQD)
}
oFD.wxXCkey=1
_(eDD,bED)
_(r,eDD)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'class',1,e,s,gg)
var fWD=_mz(z,'image',['class',2,'id',1,'mode',2,'src',3],[],e,s,gg)
_(oVD,fWD)
_(xUD,oVD)
var cXD=_n('view')
_rz(z,cXD,'class',6,e,s,gg)
var hYD=_n('view')
_rz(z,hYD,'class',7,e,s,gg)
var oZD=_oz(z,8,e,s,gg)
_(hYD,oZD)
_(cXD,hYD)
_(xUD,cXD)
var c1D=_n('view')
_rz(z,c1D,'class',9,e,s,gg)
var o2D=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var l3D=_oz(z,13,e,s,gg)
_(o2D,l3D)
_(c1D,o2D)
var a4D=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var t5D=_oz(z,17,e,s,gg)
_(a4D,t5D)
_(c1D,a4D)
_(xUD,c1D)
_(r,xUD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var b7D=_n('view')
_rz(z,b7D,'class',0,e,s,gg)
var o8D=_n('view')
_rz(z,o8D,'class',1,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',2,e,s,gg)
var o0D=_n('view')
_rz(z,o0D,'class',3,e,s,gg)
var fAE=_oz(z,4,e,s,gg)
_(o0D,fAE)
_(x9D,o0D)
var cBE=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var hCE=_mz(z,'image',['mode',-1,'class',8,'src',1],[],e,s,gg)
_(cBE,hCE)
var oDE=_n('view')
_rz(z,oDE,'class',10,e,s,gg)
var cEE=_mz(z,'image',['mode',-1,'class',11,'src',1],[],e,s,gg)
_(oDE,cEE)
_(cBE,oDE)
_(x9D,cBE)
_(o8D,x9D)
var oFE=_n('view')
_rz(z,oFE,'class',13,e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',14,e,s,gg)
_(oFE,lGE)
_(o8D,oFE)
var aHE=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',18,e,s,gg)
var eJE=_oz(z,19,e,s,gg)
_(tIE,eJE)
_(aHE,tIE)
var bKE=_n('view')
_rz(z,bKE,'class',20,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',21,e,s,gg)
var xME=_oz(z,22,e,s,gg)
_(oLE,xME)
_(bKE,oLE)
var oNE=_n('view')
_rz(z,oNE,'class',23,e,s,gg)
var fOE=_mz(z,'image',['mode',-1,'class',24,'src',1],[],e,s,gg)
_(oNE,fOE)
_(bKE,oNE)
_(aHE,bKE)
_(o8D,aHE)
var cPE=_n('view')
_rz(z,cPE,'class',26,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',27,e,s,gg)
_(cPE,hQE)
_(o8D,cPE)
var oRE=_n('view')
_rz(z,oRE,'class',28,e,s,gg)
var cSE=_n('view')
_rz(z,cSE,'class',29,e,s,gg)
var oTE=_oz(z,30,e,s,gg)
_(cSE,oTE)
_(oRE,cSE)
var lUE=_n('view')
_rz(z,lUE,'class',31,e,s,gg)
var aVE=_mz(z,'picker',['bindchange',32,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var tWE=_n('view')
_rz(z,tWE,'class',36,e,s,gg)
var eXE=_oz(z,37,e,s,gg)
_(tWE,eXE)
_(aVE,tWE)
_(lUE,aVE)
var bYE=_n('view')
_rz(z,bYE,'class',38,e,s,gg)
var oZE=_mz(z,'image',['class',39,'src',1],[],e,s,gg)
_(bYE,oZE)
_(lUE,bYE)
_(oRE,lUE)
_(o8D,oRE)
var x1E=_n('view')
_rz(z,x1E,'class',41,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',42,e,s,gg)
_(x1E,o2E)
_(o8D,x1E)
var f3E=_n('view')
_rz(z,f3E,'class',43,e,s,gg)
var c4E=_n('view')
_rz(z,c4E,'class',44,e,s,gg)
var h5E=_oz(z,45,e,s,gg)
_(c4E,h5E)
_(f3E,c4E)
var o6E=_n('view')
_rz(z,o6E,'class',46,e,s,gg)
var c7E=_n('view')
_rz(z,c7E,'class',47,e,s,gg)
var o8E=_mz(z,'picker',['bindchange',48,'data-event-opts',1,'mode',2,'range',3,'rangeKey',4,'value',5],[],e,s,gg)
var l9E=_v()
_(o8E,l9E)
if(_oz(z,54,e,s,gg)){l9E.wxVkey=1
var a0E=_n('view')
var tAF=_oz(z,55,e,s,gg)
_(a0E,tAF)
_(l9E,a0E)
}
else{l9E.wxVkey=2
var eBF=_v()
_(l9E,eBF)
if(_oz(z,56,e,s,gg)){eBF.wxVkey=1
var bCF=_n('view')
var oDF=_oz(z,57,e,s,gg)
_(bCF,oDF)
_(eBF,bCF)
}
else{eBF.wxVkey=2
var xEF=_n('view')
var oFF=_oz(z,58,e,s,gg)
_(xEF,oFF)
_(eBF,xEF)
}
eBF.wxXCkey=1
}
l9E.wxXCkey=1
_(c7E,o8E)
_(o6E,c7E)
var fGF=_n('view')
_rz(z,fGF,'class',59,e,s,gg)
var cHF=_mz(z,'image',['class',60,'src',1],[],e,s,gg)
_(fGF,cHF)
_(o6E,fGF)
_(f3E,o6E)
_(o8D,f3E)
_(b7D,o8D)
var hIF=_n('view')
_rz(z,hIF,'class',62,e,s,gg)
var oJF=_mz(z,'view',['bindtap',63,'class',1,'data-event-opts',2],[],e,s,gg)
var cKF=_oz(z,66,e,s,gg)
_(oJF,cKF)
_(hIF,oJF)
var oLF=_mz(z,'view',['bindtap',67,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var lMF=_oz(z,71,e,s,gg)
_(oLF,lMF)
_(hIF,oLF)
_(b7D,hIF)
_(r,b7D)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var tOF=_n('view')
_rz(z,tOF,'class',0,e,s,gg)
var ePF=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var bQF=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var oRF=_mz(z,'input',['class',5,'maxlength',1,'name',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_mz(z,'button',['class',12,'formType',1,'type',2],[],e,s,gg)
var oTF=_oz(z,15,e,s,gg)
_(xSF,oTF)
_(ePF,xSF)
_(tOF,ePF)
_(r,tOF)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cVF=_n('view')
_rz(z,cVF,'class',0,e,s,gg)
var hWF=_n('view')
_rz(z,hWF,'class',1,e,s,gg)
var oXF=_mz(z,'video',['controls',-1,'class',2,'id',1,'poster',2,'src',3],[],e,s,gg)
_(hWF,oXF)
_(cVF,hWF)
var cYF=_n('view')
_rz(z,cYF,'class',6,e,s,gg)
var oZF=_n('navigator')
_rz(z,oZF,'url',7,e,s,gg)
var l1F=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(oZF,l1F)
_(cYF,oZF)
var a2F=_n('view')
_rz(z,a2F,'class',10,e,s,gg)
var t3F=_n('view')
_rz(z,t3F,'class',11,e,s,gg)
var e4F=_oz(z,12,e,s,gg)
_(t3F,e4F)
_(a2F,t3F)
var b5F=_n('view')
_rz(z,b5F,'class',13,e,s,gg)
var o6F=_oz(z,14,e,s,gg)
_(b5F,o6F)
_(a2F,b5F)
var x7F=_n('view')
_rz(z,x7F,'class',15,e,s,gg)
var o8F=_oz(z,16,e,s,gg)
_(x7F,o8F)
_(a2F,x7F)
var f9F=_n('view')
_rz(z,f9F,'class',17,e,s,gg)
var c0F=_oz(z,18,e,s,gg)
_(f9F,c0F)
_(a2F,f9F)
var hAG=_n('view')
_rz(z,hAG,'class',19,e,s,gg)
var oBG=_oz(z,20,e,s,gg)
_(hAG,oBG)
_(a2F,hAG)
var cCG=_n('view')
_rz(z,cCG,'class',21,e,s,gg)
var oDG=_n('view')
_rz(z,oDG,'class',22,e,s,gg)
var lEG=_n('view')
_rz(z,lEG,'class',23,e,s,gg)
var aFG=_oz(z,24,e,s,gg)
_(lEG,aFG)
_(oDG,lEG)
var tGG=_n('view')
_rz(z,tGG,'class',25,e,s,gg)
var eHG=_oz(z,26,e,s,gg)
_(tGG,eHG)
_(oDG,tGG)
_(cCG,oDG)
var bIG=_n('view')
_rz(z,bIG,'class',27,e,s,gg)
var oJG=_mz(z,'trailer-stars',['bind:__l',28,'score',1,'showNum',2,'vueId',3],[],e,s,gg)
_(bIG,oJG)
var xKG=_n('view')
_rz(z,xKG,'class',32,e,s,gg)
var oLG=_oz(z,33,e,s,gg)
_(xKG,oLG)
_(bIG,xKG)
_(cCG,bIG)
_(a2F,cCG)
_(cYF,a2F)
_(cVF,cYF)
var fMG=_n('view')
_rz(z,fMG,'class',34,e,s,gg)
var cNG=_n('view')
_rz(z,cNG,'class',35,e,s,gg)
_(fMG,cNG)
_(cVF,fMG)
var hOG=_n('view')
_rz(z,hOG,'class',36,e,s,gg)
var oPG=_n('view')
_rz(z,oPG,'class',37,e,s,gg)
var cQG=_oz(z,38,e,s,gg)
_(oPG,cQG)
_(hOG,oPG)
var oRG=_n('view')
_rz(z,oRG,'class',39,e,s,gg)
var lSG=_oz(z,40,e,s,gg)
_(oRG,lSG)
_(hOG,oRG)
_(cVF,hOG)
var aTG=_n('view')
_rz(z,aTG,'class',41,e,s,gg)
var tUG=_n('view')
_rz(z,tUG,'class',42,e,s,gg)
var eVG=_oz(z,43,e,s,gg)
_(tUG,eVG)
_(aTG,tUG)
var bWG=_mz(z,'scroll-view',['class',44,'scrollX',1],[],e,s,gg)
var oXG=_v()
_(bWG,oXG)
var xYG=function(f1G,oZG,c2G,gg){
var o4G=_n('view')
_rz(z,o4G,'class',50,f1G,oZG,gg)
var c5G=_mz(z,'image',['bindtap',51,'class',1,'data-event-opts',2,'data-index',3,'mode',4,'src',5],[],f1G,oZG,gg)
_(o4G,c5G)
var o6G=_n('view')
_rz(z,o6G,'class',57,f1G,oZG,gg)
var l7G=_oz(z,58,f1G,oZG,gg)
_(o6G,l7G)
_(o4G,o6G)
var a8G=_n('view')
_rz(z,a8G,'class',59,f1G,oZG,gg)
var t9G=_oz(z,60,f1G,oZG,gg)
_(a8G,t9G)
_(o4G,a8G)
_(c2G,o4G)
return c2G
}
oXG.wxXCkey=2
_2z(z,48,xYG,e,s,gg,oXG,'director','index','staffId')
var e0G=_v()
_(bWG,e0G)
var bAH=function(xCH,oBH,oDH,gg){
var cFH=_n('view')
_rz(z,cFH,'class',65,xCH,oBH,gg)
var hGH=_mz(z,'image',['bindtap',66,'class',1,'data-event-opts',2,'data-index',3,'mode',4,'src',5],[],xCH,oBH,gg)
_(cFH,hGH)
var oHH=_n('view')
_rz(z,oHH,'class',72,xCH,oBH,gg)
var cIH=_oz(z,73,xCH,oBH,gg)
_(oHH,cIH)
_(cFH,oHH)
var oJH=_n('view')
_rz(z,oJH,'class',74,xCH,oBH,gg)
var lKH=_oz(z,75,xCH,oBH,gg)
_(oJH,lKH)
_(cFH,oJH)
_(oDH,cFH)
return oDH
}
e0G.wxXCkey=2
_2z(z,63,bAH,e,s,gg,e0G,'actor','index','staffId')
_(aTG,bWG)
_(cVF,aTG)
var aLH=_n('view')
_rz(z,aLH,'class',76,e,s,gg)
var tMH=_n('view')
_rz(z,tMH,'class',77,e,s,gg)
var eNH=_oz(z,78,e,s,gg)
_(tMH,eNH)
_(aLH,tMH)
var bOH=_mz(z,'scroll-view',['class',79,'scrollX',1],[],e,s,gg)
var oPH=_v()
_(bOH,oPH)
var xQH=function(fSH,oRH,cTH,gg){
var oVH=_mz(z,'image',['bindtap',85,'class',1,'data-event-opts',2,'data-index',3,'mode',4,'src',5],[],fSH,oRH,gg)
_(cTH,oVH)
return cTH
}
oPH.wxXCkey=2
_2z(z,83,xQH,e,s,gg,oPH,'img','index','*this')
_(aLH,bOH)
_(cVF,aLH)
_(r,cVF)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oXH=_n('view')
_rz(z,oXH,'class',0,e,s,gg)
var lYH=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var aZH=_n('view')
_rz(z,aZH,'class',3,e,s,gg)
var t1H=_mz(z,'image',['mode',-1,'class',4,'src',1],[],e,s,gg)
_(aZH,t1H)
_(lYH,aZH)
var e2H=_n('view')
_rz(z,e2H,'class',6,e,s,gg)
var b3H=_n('label')
_rz(z,b3H,'class',7,e,s,gg)
var o4H=_oz(z,8,e,s,gg)
_(b3H,o4H)
_(e2H,b3H)
var x5H=_mz(z,'input',['class',9,'name',1,'placeholder',2,'placeholderClass',3,'type',4,'value',5],[],e,s,gg)
_(e2H,x5H)
_(lYH,e2H)
var o6H=_n('view')
_rz(z,o6H,'class',15,e,s,gg)
var f7H=_n('label')
_rz(z,f7H,'class',16,e,s,gg)
var c8H=_oz(z,17,e,s,gg)
_(f7H,c8H)
_(o6H,f7H)
var h9H=_mz(z,'input',['class',18,'name',1,'placeholder',2,'placeholderClass',3,'type',4,'value',5],[],e,s,gg)
_(o6H,h9H)
_(lYH,o6H)
var o0H=_mz(z,'button',['formType',24,'style',1,'type',2],[],e,s,gg)
var cAI=_oz(z,27,e,s,gg)
_(o0H,cAI)
_(lYH,o0H)
_(oXH,lYH)
var oBI=_n('view')
_rz(z,oBI,'class',28,e,s,gg)
var lCI=_n('view')
_rz(z,lCI,'class',29,e,s,gg)
var aDI=_n('view')
_rz(z,aDI,'class',30,e,s,gg)
var tEI=_n('view')
_rz(z,tEI,'class',31,e,s,gg)
_(aDI,tEI)
_(lCI,aDI)
var eFI=_n('view')
_rz(z,eFI,'class',32,e,s,gg)
var bGI=_oz(z,33,e,s,gg)
_(eFI,bGI)
_(lCI,eFI)
var oHI=_n('view')
_rz(z,oHI,'class',34,e,s,gg)
var xII=_n('view')
_rz(z,xII,'class',35,e,s,gg)
_(oHI,xII)
_(lCI,oHI)
_(oBI,lCI)
var oJI=_n('view')
_rz(z,oJI,'class',36,e,s,gg)
var fKI=_mz(z,'image',['bindtap',37,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
_(oJI,fKI)
var cLI=_mz(z,'image',['bindtap',42,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(oJI,cLI)
var hMI=_mz(z,'image',['bindtap',48,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(oJI,hMI)
_(oBI,oJI)
_(oXH,oBI)
_(r,oXH)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cOI=_n('view')
_rz(z,cOI,'class',0,e,s,gg)
var oPI=_n('view')
_rz(z,oPI,'class',1,e,s,gg)
var lQI=_n('view')
_rz(z,lQI,'class',2,e,s,gg)
var aRI=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(lQI,aRI)
_(oPI,lQI)
var tSI=_mz(z,'input',['focus',-1,'bindconfirm',5,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6],[],e,s,gg)
_(oPI,tSI)
_(cOI,oPI)
var eTI=_n('view')
_rz(z,eTI,'class',12,e,s,gg)
var bUI=_v()
_(eTI,bUI)
var oVI=function(oXI,xWI,fYI,gg){
var h1I=_n('view')
_rz(z,h1I,'class',17,oXI,xWI,gg)
var o2I=_mz(z,'image',['bindtap',18,'class',1,'data-event-opts',2,'data-movieid',3,'src',4],[],oXI,xWI,gg)
_(h1I,o2I)
_(fYI,h1I)
return fYI
}
bUI.wxXCkey=2
_2z(z,15,oVI,e,s,gg,bUI,'movie','__i0__','id')
_(cOI,eTI)
_(r,cOI)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
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

__wxAppCode__['pages/faceCrop/faceCrop.wxss']=setCssToHead([".",[1],"uni-content-info { }\n.",[1],"cropper-config { padding: ",[0,20]," ",[0,40],"; }\n.",[1],"cropper-content { min-height: ",[0,750],"; width: 100%; }\n.",[1],"uni-corpper { position: relative; overflow: hidden; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"uni-corpper-content { position: relative; }\n.",[1],"uni-corpper-content wx-image { display: block; width: 100%; min-width: 0 !important; max-width: none !important; height: 100%; min-height: 0 !important; max-height: none !important; image-orientation: 0deg !important; margin: 0 auto; }\n.",[1],"uni-cropper-drag-box { position: absolute; top: 0; right: 0; bottom: 0; left: 0; cursor: move; background: rgba(0, 0, 0, 0.6); z-index: 1; }\n.",[1],"uni-corpper-crop-box { position: absolute; background: rgba(255, 255, 255, 0.3); z-index: 2; }\n.",[1],"uni-corpper-crop-box .",[1],"uni-cropper-view-box { position: relative; display: block; width: 100%; height: 100%; overflow: visible; outline: ",[0,1]," solid #69f; outline-color: rgba(102, 153, 255, .75) }\n.",[1],"uni-cropper-dashed-h { position: absolute; top: 33.33333333%; left: 0; width: 100%; height: 33.33333333%; border-top: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-bottom: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-dashed-v { position: absolute; left: 33.33333333%; top: 0; width: 33.33333333%; height: 100%; border-left: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-right: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-line-t { position: absolute; display: block; width: 100%; background-color: #69f; top: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: n-resize; }\n.",[1],"uni-cropper-line-t::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-r { position: absolute; display: block; background-color: #69f; top: 0; right: ",[0,0],"; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: e-resize; }\n.",[1],"uni-cropper-line-r::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-b { position: absolute; display: block; width: 100%; background-color: #69f; bottom: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: s-resize; }\n.",[1],"uni-cropper-line-b::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-l { position: absolute; display: block; background-color: #69f; top: 0; left: 0; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: w-resize; }\n.",[1],"uni-cropper-line-l::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-point { width: ",[0,5],"; height: ",[0,5],"; background-color: #69f; opacity: .75; position: absolute; z-index: 3; }\n.",[1],"point-t { top: ",[0,-3],"; left: 50%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-tr { top: ",[0,-3],"; left: 100%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-r { top: 50%; left: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-rb { left: 100%; top: 100%; -webkit-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); cursor: n-resize; width: ",[0,36],"; height: ",[0,36],"; background-color: #69f; position: absolute; z-index: 1112; opacity: 1; }\n.",[1],"point-b { left: 50%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-bl { left: 0%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-l { left: 0%; top: 50%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-lt { left: 0%; top: 0%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"uni-cropper-viewer { position: relative; width: 100%; height: 100%; overflow: hidden; }\n.",[1],"uni-cropper-viewer wx-image { position: absolute; z-index: 2; }\n.",[1],"container { }\n.",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"myDistance { }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/faceCrop/faceCrop.wxss"});    
__wxAppCode__['pages/faceCrop/faceCrop.wxml']=$gwx('./pages/faceCrop/faceCrop.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"carousel { width: 100%; height: ",[0,440],"; }\n.",[1],"super-hot{ margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"icon { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"hot-title-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hot-title{ font-size: 20px; margin-left: ",[0,20],"; font-weight: bold; }\n.",[1],"hot{ width: 100%; white-space: nowrap; }\n.",[1],"single-poster { display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"single-poster:last-child{ margin-right: ",[0,20],"; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-name { width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: bold; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"hot-movies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; }\n.",[1],"hot-movie-single{ width: ",[0,350],"; height: ",[0,220],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like{ padding: ",[0,30]," ",[0,20],"; }\n.",[1],"single-movie-like{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-bottom: ",[0,20],"; }\n.",[1],"single-movie-like .",[1],"poster{ width: ",[0,180],"; height: ",[0,240],"; border-radius: 3%; }\n.",[1],"movie-desc{ width: ",[0,340],"; }\n.",[1],"movie-title{ overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-info{ color: #808080; font-size: 14px; }\n.",[1],"movie-oper{ width: ",[0,140],"; height: ",[0,220],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; border-left: 2px dashed #ddd; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"praise-ico{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"praise-me{ font-size: 14px; color: #feab2a; }\n.",[1],"animation-opacity{ font-weight: bold; opacity: 0; -webkit-transform: translateY(-30px); -ms-transform: translateY(-30px); transform: translateY(-30px); }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; }\n.",[1],"header { padding: ",[0,120]," ",[0,30]," ",[0,40]," ",[0,30],"; background-color: #ffd655; background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_1OAYFAIAAAzO_Q1tPg693.png) repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face { width: ",[0,120],"; height: ",[0,120],"; border-radius: 50%; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"info-wapper { width: 80%; margin-left: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"nickname { color: #6a5018; font-size: 18px; font-weight: bold; }\n.",[1],"regist-login { margin-left: ",[0,60],"; margin-top: ",[0,30],"; }\n.",[1],"nav-info { color: #a38e62; font-size: 14px; margin-top: ",[0,10],"; }\n.",[1],"set-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 15%; }\n.",[1],"settings { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"big-next { font-size: ",[0,160],"; color: #F7F7F7; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meFace/meFace.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"pending-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,40],"; }\n.",[1],"pending-face { width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"notice { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"notice-words { color: gray; font-size: 13px; margin-top: ",[0,30],"; width: ",[0,600],"; }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/meFace/meFace.wxss"});    
__wxAppCode__['pages/meFace/meFace.wxml']=$gwx('./pages/meFace/meFace.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"info-list { padding: ",[0,0]," ",[0,30],"; }\n.",[1],"info-words { color: #333333; font-size: 16px; width: 25%; line-height: ",[0,80],"; }\n.",[1],"face { width: ",[0,80],"; height: ",[0,80],"; border-radius: 50%; }\n.",[1],"arrow-block { margin-left: ",[0,10],"; line-height: ",[0,86],"; }\n.",[1],"arrow-ico { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"item-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face-line-upbottom { margin-top: ",[0,20],"; padding-top: ",[0,20],"; padding-bottom: ",[0,20],"; }\n.",[1],"line-top { }\n.",[1],"right-wapper { width: 80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"gray-fields { font-size: 14px; color: darkgray; line-height: ",[0,80],"; }\n.",[1],"footer-wapper { position: fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; }\n.",[1],"footer-words { text-align: center; background-color: white; padding: ",[0,20],"; color: #333333; font-size: 16px; }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/meNickName/meNickName.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"graywords { color: #EAEAEA; }\n.",[1],"input { height: ",[0,80],"; line-height: ",[0,80],"; width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/meNickName/meNickName.wxss"});    
__wxAppCode__['pages/meNickName/meNickName.wxml']=$gwx('./pages/meNickName/meNickName.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"movie{ width: 100%; height: ",[0,440],"; }\n.",[1],"player { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: black; }\n.",[1],"movie-info{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background: #f7f4f9; padding: ",[0,40]," ",[0,20],"; }\n.",[1],"cover{ width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie-desc{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-left: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,400],"; }\n.",[1],"title{ font-size: 30px; }\n.",[1],"basic-info{ color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score-block{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #fff; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; padding: ",[0,20],"; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score-words{ font-size: 12px; color: grey; }\n.",[1],"score-nums{ font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #FEAB2A; line-height: ",[0,60],"; }\n.",[1],"prise-counts{ font-size: 12px; color: grey; line-height: ",[0,40],"; }\n.",[1],"plots-block{ background: #f2f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots-title{ color: #A9A9A9; font-size: 14px; }\n.",[1],"plots-desc{ margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll-block{ background: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll-list{ width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"plot-image{ width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],"; }\n.",[1],"single-actor{ width: ",[0,170],"; height: ",[0,240],"; margin-right: ",[0,10],"; }\n.",[1],"actor-wrapper{ display: inline-block; }\n.",[1],"actor-name{ width: ",[0,170],"; text-align: center; font-size: 15px; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor-role{ width: ",[0,170],"; text-align: center; color: #a9a9a9; font-size: 13px; }\n",],undefined,{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/registLogin/registLogin.wxss']=setCssToHead([".",[1],"body { border-top: solid 1px #DBDBDA; padding: 0 ",[0,40],"; }\n.",[1],"face-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,120],"; margin-bottom: ",[0,120],"; }\n.",[1],"face { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"info-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: solid 1px #DBDBDA; padding-bottom: ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"words-lbl { color: #808080; }\n.",[1],"input { width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"graywords { color: #EAEAEA; }\n.",[1],"third-wapper { width: 100%; margin-top: ",[0,60],"; }\n.",[1],"third-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-words { color: #A9A9A9; font-size: 13px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"single-line { padding: ",[0,15]," ",[0,20],"; width: 25%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"third-icos-wapper { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-ico { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"third-btn-ico { background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png); width: ",[0,60],"; height: ",[0,60],"; background-color: white; background-size: ",[0,60]," ",[0,60],"; background-repeat:no-repeat; border:none; padding: 0; }\nwx-button::after{ border: none; }\n",],undefined,{path:"./pages/registLogin/registLogin.wxss"});    
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

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
