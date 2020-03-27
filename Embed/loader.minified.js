!function(){'use strict';function e(e,r){throw _=!0,WA.error(e,r),'abort'}function r(e,r,t){var n,a,o,f,u,l,c;if(0>=t)return 0;for(n=e,a=i,f=o=r,u=o+t-1,l=0;l<n.length;++l)if((c=n.charCodeAt(l))>=55296&&57343>=c&&(c=65536+((1023&c)<<10)|1023&n.charCodeAt(++l)),c>127)if(c>2047)if(c>65535)if(c>2097151)if(c>67108863){if(o+5>=u)break;a[o++]=252|c>>30,a[o++]=128|c>>24&63,a[o++]=128|c>>18&63,a[o++]=128|c>>12&63,a[o++]=128|c>>6&63,a[o++]=128|63&c}else{if(o+4>=u)break;a[o++]=248|c>>24,a[o++]=128|c>>18&63,a[o++]=128|c>>12&63,a[o++]=128|c>>6&63,a[o++]=128|63&c}else{if(o+3>=u)break;a[o++]=240|c>>18,a[o++]=128|c>>12&63,a[o++]=128|c>>6&63,a[o++]=128|63&c}else{if(o+2>=u)break;a[o++]=224|c>>12,a[o++]=128|c>>6&63,a[o++]=128|63&c}else{if(o+1>=u)break;a[o++]=192|c>>6,a[o++]=128|63&c}else{if(o>=u)break;a[o++]=c}return a[o]=0,o-f}function t(e,r){var t,n,a,o,f,u,l,c,s,g,m,d,b,h;if(0===r||!e)return'';for(t=0,a=0;(!r||a!=r)&&(0!=(n=i[e+a>>0])||r);a++)t|=n;if(r||(r=a),128&t)for(o=i,f=e,u=e+r,l=String.fromCharCode,b='';;){if(f==u||!(c=o[f++]))return b;128&c?(s=63&o[f++],192!=(224&c)?(a=63&o[f++],224==(240&c)?c=(15&c)<<12|s<<6|a:(g=63&o[f++],240==(248&c)?c=(7&c)<<18|s<<12|a<<6|g:(m=63&o[f++],c=248==(252&c)?(3&c)<<24|s<<18|a<<12|g<<6|m:(1&c)<<30|s<<24|a<<18|g<<12|m<<6|(n=63&o[f++]))),b+=65536>c?l(c):l(55296|(d=c-65536)>>10,56320|1023&d)):b+=l((31&c)<<6|s)):b+=l(c)}for(h='';r>0;e+=1024,r-=1024)h+=String.fromCharCode.apply(String,i.subarray(e,e+Math.min(r,1024)));return h}function n(e){var r,t,n,a,o,i,f,u=new Uint8Array(128),l=function(t){return u[e.charCodeAt(r+t)]};for(r=0;64>r;r++)u['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charCodeAt(r)]=r;for(u[45]=62,u[95]=63,t=e.length,n='='===e[t-2]?2:'='===e[t-1]?1:0,a=new Uint8Array(3*t/4-n),o=0,i=n>0?t-4:t,f=0,r=0;i>r;r+=4)f=l(0)<<18|l(1)<<12|l(2)<<6|l(3),a[o++]=f>>16&255,a[o++]=f>>8&255,a[o++]=255&f;return 1===n?(f=l(0)<<10|l(1)<<4|l(2)>>2,a[o]=f>>8&255,a[o+1]=255&f):2===n&&(a[o]=255&(l(0)<<2|l(1)>>4)),a}function a(){var e=c.buffer;o=new Int32Array(e),i=new Uint8Array(e),f=new Uint16Array(e),u=new Uint32Array(e),l=new Float32Array(e)}var o,i,f,u,l,c,s,g,m,d,b,h,A,v,x,_=!1;WA.print=WA.print||function(e){console.log(e)},WA.error=WA.error||function(e,r){WA.print('[ERROR] '+e+': '+r+'\n')},d={},(m={sbrk:function(r){var t=s,n=t+r,o=n-c.buffer.byteLength;return n>268435456&&e('MEM','Out of memory'),o>0&&(c.grow(o+65535>>16),a()),s=n,0|t},time:function(e){var r=Date.now()/1e3|0;return e&&(u[e>>2]=r),r},gettimeofday:function(e){var r=Date.now();u[e>>2]=r/1e3|0,u[e+4>>2]=r%1e3*1e3|0},__assert_fail:function(r,n,a,o){e('CRASH','Assert '+t(r)+', at: '+(n?t(n):'unknown filename'),o&&t(o))},__cxa_uncaught_exception:function(){e('CRASH','Uncaught exception!')},__cxa_pure_virtual:function(){e('CRASH','pure virtual')},abort:function(){e('CRASH','Abort called')},longjmp:function(){e('CRASH','Unsupported longjmp called')}}).setjmp=m.__cxa_atexit=m.__lock=m.__unlock=function(){},m.ceil=m.ceilf=Math.ceil,m.exp=m.expf=Math.exp,m.floor=m.floorf=Math.floor,m.log=m.logf=Math.log,m.pow=m.powf=Math.pow,m.cos=m.cosf=Math.cos,m.sin=m.sinf=Math.sin,m.tan=m.tanf=Math.tan,m.acos=m.acosf=Math.acos,m.asin=m.asinf=Math.asin,m.sqrt=m.sqrtf=Math.sqrt,m.atan=m.atanf=Math.atan,m.atan2=m.atan2f=Math.atan2,m.fabs=m.fabsf=m.abs=Math.abs,m.round=m.roundf=m.rint=m.rintf=Math.round,function(e,r){var a=0,o=WA.payload?n(WA.payload):new Uint8Array(0);delete WA.payload,e.__sys_open=function(e){return a=0,t(e),9},r.fd_read=function(e,r,t,n){var f,l,c,s,g=0;for(f=0;t>f;f++){if(l=u[r+8*f>>2],c=u[r+(8*f+4)>>2],s=Math.min(c,o.length-a),i.set(o.subarray(a,a+s),l),a+=s,0>s)return 5;if(g+=s,c>s)break}return u[n>>2]=g,0},r.fd_seek=function(e,r,t,n,i){return 0==n&&(a=r),1==n&&(a+=r),2==n&&(a=o.length-r),0>a&&(a=0),a>o.length&&(a=o.length),u[i+0>>2]=a,u[i+4>>2]=0,0},r.fd_write=function(e,r,n,a){var o,i,f,l=0,c='';if(0==n)return 0;for(o=0;n>o;o++){if(i=u[r+8*o>>2],0>(f=u[r+(8*o+4)>>2]))return-1;l+=f,c+=t(i,f)}return WA.print(c),u[a>>2]=l,0},r.fd_close=function(){return 0},e.__sys_fcntl64=e.__sys_ioctl=function(){return 0}}(m,d),function(n){function a(e){var r,t=b++;for(r=e.length;t>r;r++)e[r]=null;return t}function c(e){GLlastError||(GLlastError=e)}function s(e,r,t,n,a){var o,s,g,m,d;switch(r){case 6406:case 6409:case 6402:s=1;break;case 6410:s=2;break;case 6407:case 35904:s=3;break;case 6408:case 35906:s=4;break;default:return c(1280),null}switch(e){case 5121:o=1*s;break;case 5123:case 36193:o=2*s;break;case 5125:case 5126:o=4*s;break;case 34042:o=4;break;case 33635:case 32819:case 32820:o=2;break;default:return c(1280),null}switch(g=t*o,d=y,m=n>0?Math.floor((g+d-1)/d)*d*(n-1)+g:0,e){case 5121:return i.subarray(a,a+m);case 5126:return l.subarray(a>>2,a+m>>2);case 5125:case 34042:return u.subarray(a>>2,a+m>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return f.subarray(a>>1,a+m>>1);default:return c(1280),null}}var m,d,b=1,h=[],A=[],v=[],x=[],_=[],w=[],p={},y=4,S=null,k=[0];for(S=new Float32Array(256),d=0;256>d;d++)k[d]=S.subarray(0,d+1);g=function(r,t){var n,a,o,i,f,u,l,c;t={majorVersion:1,minorVersion:0,antialias:!0,alpha:!1},n='';try{let a=function(e){n=e.statusMessage||n};r.addEventListener('webglcontextcreationerror',a,!1);try{m=r.getContext('webgl',t)||r.getContext('experimental-webgl',t)}finally{r.removeEventListener('webglcontextcreationerror',a,!1)}if(!m)throw'Could not create context'}catch(r){e('WEBGL',r+(n?' ('+n+')':''))}return(a=m.getSupportedExtensions())&&a.length>0&&(c=[(i='OES_')+(u='texture_')+'float',i+u+'half_float',i+'standard_derivatives',i+'vertex_array_object',(o='WEBGL_')+(l='compressed_'+u)+'s3tc',o+'depth_texture',i+'element_index_uint',(f='EXT_')+u+'filter_anisotropic',f+'frag_depth',o+'draw_buffers','ANGLE_instanced_arrays',i+u+'float_linear',i+u+'half_float_linear',f+'blend_minmax',f+'shader_texture_lod',o+l+'pvrtc',f+'color_buffer_half_float',o+'color_buffer_float',f+'sRGB',o+l+'etc1',f+'disjoint_timer_query',o+l+'etc',o+l+'astc',f+'color_buffer_float',o+l+'s3tc_srgb',f+'disjoint_timer_query_webgl2'],a.forEach(function(e){-1!=c.indexOf(e)&&m.getExtension(e)})),!0},n.glActiveTexture=function(e){m.activeTexture(e)},n.glAttachShader=function(e,r){m.attachShader(A[e],w[r])},n.glBindAttribLocation=function(e,r,n){m.bindAttribLocation(A[e],r,t(n))},n.glBindBuffer=function(e,r){m.bindBuffer(e,r?h[r]:null)},n.glBindFramebuffer=function(e,r){m.bindFramebuffer(e,r?v[r]:null)},n.glBindTexture=function(e,r){m.bindTexture(e,r?x[r]:null)},n.glBlendFunc=function(e,r){m.blendFunc(e,r)},n.glBlendFuncSeparate=function(e,r,t,n){m.blendFuncSeparate(e,r,t,n)},n.glBlendColor=function(e,r,t,n){m.blendColor(e,r,t,n)},n.glBlendEquation=function(e){m.blendEquation(e)},n.glBlendEquationSeparate=function(e,r){m.blendEquationSeparate(e,r)},n.glBufferData=function(e,r,t,n){t?m.bufferData(e,i.subarray(t,t+r),n):m.bufferData(e,r,n)},n.glBufferSubData=function(e,r,t,n){m.bufferSubData(e,r,i.subarray(n,n+t))},n.glClear=function(e){m.clear(e)},n.glClearColor=function(e,r,t,n){m.clearColor(e,r,t,n)},n.glColorMask=function(e,r,t,n){m.colorMask(!!e,!!r,!!t,!!n)},n.glCompileShader=function(e){m.compileShader(w[e])},n.glCreateProgram=function(){var e=a(A),r=m.createProgram();return r.name=e,A[e]=r,e},n.glCreateShader=function(e){var r=a(w);return w[r]=m.createShader(e),r},n.glDeleteBuffers=function(e,r){var t,n,a;for(t=0;e>t;t++)n=o[r+4*t>>2],(a=h[n])&&(m.deleteBuffer(a),a.name=0,h[n]=null)},n.glDeleteFramebuffers=function(e,r){var t,n,a;for(t=0;e>t;++t)n=o[r+4*t>>2],(a=v[n])&&(m.deleteFramebuffer(a),a.name=0,v[n]=null)},n.glDeleteProgram=function(e){if(e){var r=A[e];r?(m.deleteProgram(r),r.name=0,A[e]=null,p[e]=null):c(1281)}},n.glDeleteShader=function(e){if(e){var r=w[e];r?(m.deleteShader(r),w[e]=null):c(1281)}},n.glDeleteTextures=function(e,r){var t,n,a;for(t=0;e>t;t++)n=o[r+4*t>>2],(a=x[n])&&(m.deleteTexture(a),a.name=0,x[n]=null)},n.glDepthFunc=function(e){m.depthFunc(e)},n.glDepthMask=function(e){m.depthMask(!!e)},n.glDetachShader=function(e,r){m.detachShader(A[e],w[r])},n.glDisable=function(e){m.disable(e)},n.glDisableVertexAttribArray=function(e){m.disableVertexAttribArray(e)},n.glDrawArrays=function(e,r,t){m.drawArrays(e,r,t)},n.glDrawElements=function(e,r,t,n){m.drawElements(e,r,t,n)},n.glEnable=function(e){m.enable(e)},n.glEnableVertexAttribArray=function(e){m.enableVertexAttribArray(e)},n.glFramebufferTexture2D=function(e,r,t,n,a){m.framebufferTexture2D(e,r,t,x[n],a)},n.glGenBuffers=function(e,r){var t,n,i;for(t=0;e>t;t++){if(!(n=m.createBuffer())){for(c(1282);e>t;)o[r+4*t++>>2]=0;return}i=a(h),n.name=i,h[i]=n,o[r+4*t>>2]=i}},n.glGenFramebuffers=function(e,r){var t,n,i;for(t=0;e>t;++t){if(!(n=m.createFramebuffer())){for(c(1282);e>t;)o[r+4*t++>>2]=0;return}i=a(v),n.name=i,v[i]=n,o[r+4*t>>2]=i}},n.glGenTextures=function(e,r){var t,n,i;for(t=0;e>t;t++){if(!(n=m.createTexture())){for(c(1282);e>t;)o[r+4*t++>>2]=0;return}i=a(x),n.name=i,x[i]=n,o[r+4*t>>2]=i}},n.glGetActiveUniform=function(e,t,n,a,i,f,u){var l,c;e=A[e],(l=m.getActiveUniform(e,t))&&(n>0&&u?(c=r(l.name,u,n),a&&(o[a>>2]=c)):a&&(o[a>>2]=0),i&&(o[i>>2]=l.size),f&&(o[f>>2]=l.type))},n.glGetAttribLocation=function(e,r){return e=A[e],r=t(r),m.getAttribLocation(e,r)},n.glGetError=function(){if(GLlastError){var e=GLlastError;return GLlastError=0,e}return m.getError()},n.glGetIntegerv=function(e,r){!function(e,r){var t,n,a;if(r){switch(t=void 0,e){case 36346:t=1;break;case 36344:return;case 36345:t=0;break;case 34466:t=m.getParameter(34467).length}if(void 0===t)switch(typeof(n=m.getParameter(e))){case'number':t=n;break;case'boolean':t=n?1:0;break;case'string':return void c(1280);case'object':if(null===n)switch(e){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34068:t=0;break;default:return void c(1280)}else{if(n instanceof Float32Array||n instanceof Uint32Array||n instanceof Int32Array||n instanceof Array){for(a=0;a<n.length;++a)o[r+4*a>>2]=n[a];return}if(!(n instanceof WebGLBuffer||n instanceof WebGLProgram||n instanceof WebGLFramebuffer||n instanceof WebGLRenderbuffer||n instanceof WebGLTexture))return void c(1280);t=0|n.name}break;default:return void c(1280)}o[r>>2]=t}else c(1281)}(e,r)},n.glGetProgramInfoLog=function(e,t,n,a){var i,f=m.getProgramInfoLog(A[e]);null===f&&(f='(unknown error)'),t>0&&a?(i=r(f,a,t),n&&(o[n>>2]=i)):n&&(o[n>>2]=0)},n.glGetProgramiv=function(e,r,t){var n,a,i,f,u,l,s;if(t)if(b>e)if(n=p[e])if(35716==r)null===(a=m.getProgramInfoLog(A[e]))&&(a='(unknown error)'),o[t>>2]=a.length+1;else if(35719==r)o[t>>2]=n.maxUniformLength;else if(35722==r){if(-1==n.maxAttributeLength)for(e=A[e],i=m.getProgramParameter(e,m.ACTIVE_ATTRIBUTES),n.maxAttributeLength=0,f=0;i>f;++f)u=m.getActiveAttrib(e,f),n.maxAttributeLength=Math.max(n.maxAttributeLength,u.name.length+1);o[t>>2]=n.maxAttributeLength}else if(35381==r){if(-1==n.maxUniformBlockNameLength)for(e=A[e],l=m.getProgramParameter(e,m.ACTIVE_UNIFORM_BLOCKS),n.maxUniformBlockNameLength=0,f=0;l>f;++f)s=m.getActiveUniformBlockName(e,f),n.maxUniformBlockNameLength=Math.max(n.maxUniformBlockNameLength,s.length+1);o[t>>2]=n.maxUniformBlockNameLength}else o[t>>2]=m.getProgramParameter(A[e],r);else c(1282);else c(1281);else c(1281)},n.glGetShaderInfoLog=function(e,t,n,a){var i,f=m.getShaderInfoLog(w[e]);null===f&&(f='(unknown error)'),t>0&&a?(i=r(f,a,t),n&&(o[n>>2]=i)):n&&(o[n>>2]=0)},n.glGetShaderiv=function(e,r,t){var n,a,i;t?35716==r?(null===(n=m.getShaderInfoLog(w[e]))&&(n='(unknown error)'),o[t>>2]=n.length+1):35720==r?(i=null===(a=m.getShaderSource(w[e]))||0==a.length?0:a.length+1,o[t>>2]=i):o[t>>2]=m.getShaderParameter(w[e],r):c(1281)},n.glGetUniformLocation=function(e,r){var n,a,o,i,f;if(n=0,-1!==(r=t(r)).indexOf(']',r.length-1)){if(a=r.lastIndexOf('['),(o=r.slice(a+1,-1)).length>0&&0>(n=parseInt(o)))return-1;r=r.slice(0,a)}return(i=p[e])&&(f=i.uniforms[r])&&n<f[0]?f[1]+n:-1},n.glLineWidth=function(e){m.lineWidth(e)},n.glLinkProgram=function(e){m.linkProgram(A[e]),p[e]=null,function(e){var r,t,n,o,i,f,u,l,c,s,g,d=A[e];for(p[e]={uniforms:{},maxUniformLength:0,maxAttributeLength:-1,maxUniformBlockNameLength:-1},t=(r=p[e]).uniforms,n=m.getProgramParameter(d,m.ACTIVE_UNIFORMS),o=0;n>o;++o)if(f=(i=m.getActiveUniform(d,o)).name,r.maxUniformLength=Math.max(r.maxUniformLength,f.length+1),-1!==f.indexOf(']',f.length-1)&&(u=f.lastIndexOf('['),f=f.slice(0,u)),null!=(l=m.getUniformLocation(d,f)))for(c=a(_),t[f]=[i.size,c],_[c]=l,s=1;s<i.size;++s)g=f+'['+s+']',l=m.getUniformLocation(d,g),c=a(_),_[c]=l}(e)},n.glPixelStorei=function(e,r){3333==e||3317==e&&(y=r),m.pixelStorei(e,r)},n.glReadPixels=function(e,r,t,n,a,o,i){var f=s(o,a,t,n,i);if(!f)return c(1280);m.readPixels(e,r,t,n,a,o,f)},n.glScissor=function(e,r,t,n){m.scissor(e,r,t,n)},n.glShaderSource=function(e,r,n,a){var i=function(e,r,n,a){var i,f,u='';for(i=0;r>i;++i)u+=a?0>(f=o[a+4*i>>2])?t(o[n+4*i>>2]):t(o[n+4*i>>2],f):t(o[n+4*i>>2]);return u}(0,r,n,a);m.shaderSource(w[e],i)},n.glTexImage2D=function(e,r,t,n,a,o,i,f,u){var l=null;u&&(l=s(f,i,n,a,u)),m.texImage2D(e,r,t,n,a,o,i,f,l)},n.glTexParameteri=function(e,r,t){m.texParameteri(e,r,t)},n.glTexSubImage2D=function(e,r,t,n,a,o,i,f,u){var l=null;u&&(l=s(f,i,a,o,u)),m.texSubImage2D(e,r,t,n,a,o,i,f,l)},n.glUniform1f=function(e,r){m.uniform1f(_[e],r)},n.glUniform1i=function(e,r){m.uniform1i(_[e],r)},n.glUniform2f=function(e,r,t){m.uniform2f(_[e],r,t)},n.glUniform3f=function(e,r,t,n){m.uniform3f(_[e],r,t,n)},n.glUniform3fv=function(e,r,t){var n,a,o;if(3*r>256)n=l.subarray(t>>2,t+12*r>>2);else for(n=k[3*r-1],a=t>>2,o=0;o!=3*r;o++)n[o]=l[a+o];m.uniform3fv(_[e],n)},n.glUniform4f=function(e,r,t,n,a){m.uniform4f(_[e],r,t,n,a)},n.glUniformMatrix4fv=function(e,r,t,n){var a,o,i;if((r<<=4)>256)a=l.subarray(n>>2,n+4*r>>2);else for(a=k[r-1],o=n>>2,i=0;i!=r;i+=4)a[i]=l[o+i],a[i+1]=l[o+i+1],a[i+2]=l[o+i+2],a[i+3]=l[o+i+3];m.uniformMatrix4fv(_[e],!!t,a)},n.glUseProgram=function(e){m.useProgram(e?A[e]:null)},n.glVertexAttrib4f=function(e,r,t,n,a){m.vertexAttrib4f(e,r,t,n,a)},n.glVertexAttrib4fv=function(e,r){m.vertexAttrib4f(e,l[r>>2],l[r+4>>2],l[r+8>>2],l[r+12>>2])},n.glVertexAttribPointer=function(e,r,t,n,a,o){m.vertexAttribPointer(e,r,t,!!n,a,o)},n.glViewport=function(e,r,t,n){m.viewport(e,r,t,n)}}(m),function(e){var r;e.WAJS_SetupCanvas=function(e,t){var n,a=WA.canvas;a.width=e,a.height=t,a.height=a.clientHeight,a.width=a.clientWidth,g(a)&&(r=Date.now(),n=function(){_||(window.requestAnimationFrame(n),WA.asm.WAFNDraw())},window.requestAnimationFrame(n))},e.WAJS_GetTime=function(){return Date.now()-r},e.WAJS_StartAudio=function(){var e,r,t,n,a,o,i,f,u,c;try{e=new((u=window)[c='AudioContext']||u['moz'+c]||u['webkit'+c]||u['ms'+c])}catch(e){}e?(r=0,n=(t=882)/44100,a=0,o=0,i=[{length:0}],f=0,setInterval(function(){var u,c,s,g;if(('suspended'!=e.state||(e.resume(),'suspended'!=e.state))&&(0==(u=e.currentTime)&&(r=0),n>=r-u)){if(i[0].length!=t)for(WA.asm.free(a),o=(a=WA.asm.malloc(t<<3))>>2,c=0;4!=c;c++)i[c]=e.createBuffer(2,t,44100);WA.asm.WAFNAudio(a,t)&&((s=i[f=(f+1)%4]).getChannelData(0).set(l.subarray(o,o+t)),s.getChannelData(1).set(l.subarray(o+t,o+(t<<1))),(g=e.createBufferSource()).connect(e.destination),g.buffer=s,g[g.start?'start':'noteOn'](.005+r)),u>r&&u>.5&&(10*n>u-r&&11025>t&&document.hasFocus()&&(n=(t+=441)/44100,WA.print('Warning: Audio callback had starved sending audio by '+(u-r)+' seconds. (extending samples to: '+t+')\n')),r=u+(document.hasFocus()?0:1.5)),r+=n}},10)):WA.print('Warning: WebAudio not supported\n')}}(m),WA.wasm||e('BOOT','Missing Wasm data'),b=n(WA.wasm),delete WA.wasm,h=64,A=4096,v=65536;for(let e,r,t,n=8;n<b.length;n=e){function w(){return b[n++]}function p(){for(var e=n,r=0,t=128;128&t;n++)r|=(127&(t=b[n]))<<7*(n-e);return r}if(r=p(),t=p(),e=n+t,0>r||r>11||0>=t||e>b.length)break;if(6==r){p(),w(),w(),p();let e=p();p(),v=e}if(11==r)for(let r=p(),t=0;t!=r&&e>n;t++){w(),p();let e=p(),r=(p(),p());A=(h=e+r)+15>>4<<4,n+=r}}h>0&&v>A||e('BOOT','Invalid memory layout ('+h+'/'+A+'/'+v+')'),x=262144+(v+65535>>16<<16),s=v,c=m.memory=new WebAssembly.Memory({initial:x>>16,maximum:4096}),a(),WebAssembly.instantiate(b,{env:m,wasi_unstable:d,wasi_snapshot_preview1:d,wasi:d}).then(function(e){WA.asm=e.instance.exports;var t=A;r('wasm',u[t+0>>2]=t+8,256),u[t+4>>2]=0,WA.asm.__wasm_call_ctors&&WA.asm.__wasm_call_ctors(),WA.asm.main&&WA.asm.main(1,t,0),WA.started&&WA.started()}).catch(function(r){'abort'!==r&&e('BOOT','WASM instiantate error: '+r+(r.stack?'\n'+r.stack:''))})}();