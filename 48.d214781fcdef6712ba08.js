(self.webpackJsonp=self.webpackJsonp||[]).push([[48],{404:function(e,t,n){"use strict";n.r(t);var o,r=n(409);function i(e){var t=r.f(),n=e===o.TypeScript?s:u,i=e===o.TypeScript?c:l;return{getInitialState:function(){return new a(e,r.a.None,!1)},tokenize:function(e,s){return function(e,t,n,i,s){var c={tokens:[],endState:new a(i.language,r.a.None,!1)};function u(e,t){0!==c.tokens.length&&c.tokens[c.tokens.length-1].scopes===t||c.tokens.push({startIndex:e,scopes:t})}var l=i.language===o.TypeScript;if(!l&&function(e,t,n){if(0===t.indexOf("#!"))return n(e,"comment.shebang"),!0}(0,s,u))return c;var m=n.getClassificationsForLine(s,i.eolState,!0),p=0;c.endState.eolState=m.finalLexState,c.endState.inJsDocComment=m.finalLexState===r.a.InMultiLineCommentTrivia&&(i.inJsDocComment||/\/\*\*.*$/.test(s));for(var g=0,f=m.entries;g<f.length;g++){var d,h=f[g];if(h.classification===r.e.Punctuation){var v=s.charCodeAt(p);d=e[v]||t[h.classification],u(p,d)}else h.classification===r.e.Comment?c.endState.inJsDocComment||/\/\*\*.*\*\//.test(s.substr(p,h.length))?u(p,l?"comment.doc.ts":"comment.doc.js"):u(p,l?"comment.ts":"comment.js"):u(p,t[h.classification]||"");p+=h.length}return c}(n,i,t,s,e)}}}!function(e){e[e.TypeScript=0]="TypeScript",e[e.EcmaScript5=1]="EcmaScript5"}(o||(o={}));var a=function(){function e(e,t,n){this.language=e,this.eolState=t,this.inJsDocComment=n}return e.prototype.clone=function(){return new e(this.language,this.eolState,this.inJsDocComment)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.eolState===t.eolState&&this.inJsDocComment===t.inJsDocComment)},e}();var s=Object.create(null);s["(".charCodeAt(0)]="delimiter.parenthesis.ts",s[")".charCodeAt(0)]="delimiter.parenthesis.ts",s["{".charCodeAt(0)]="delimiter.bracket.ts",s["}".charCodeAt(0)]="delimiter.bracket.ts",s["[".charCodeAt(0)]="delimiter.array.ts",s["]".charCodeAt(0)]="delimiter.array.ts";var c=Object.create(null);c[r.e.Identifier]="identifier.ts",c[r.e.Keyword]="keyword.ts",c[r.e.Operator]="delimiter.ts",c[r.e.Punctuation]="delimiter.ts",c[r.e.NumberLiteral]="number.ts",c[r.e.RegExpLiteral]="regexp.ts",c[r.e.StringLiteral]="string.ts";var u=Object.create(null);u["(".charCodeAt(0)]="delimiter.parenthesis.js",u[")".charCodeAt(0)]="delimiter.parenthesis.js",u["{".charCodeAt(0)]="delimiter.bracket.js",u["}".charCodeAt(0)]="delimiter.bracket.js",u["[".charCodeAt(0)]="delimiter.array.js",u["]".charCodeAt(0)]="delimiter.array.js";var l=Object.create(null);l[r.e.Identifier]="identifier.js",l[r.e.Keyword]="keyword.js",l[r.e.Operator]="delimiter.js",l[r.e.Punctuation]="delimiter.js",l[r.e.NumberLiteral]="number.js",l[r.e.RegExpLiteral]="regexp.js",l[r.e.StringLiteral]="string.js";var m=monaco.Promise,p=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=this._defaults.getWorkerMaxIdleTime(),t=Date.now()-this._lastUsedTime;e>0&&t>e&&this._stopWorker()}},e.prototype._getClient=function(){var e=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then(function(t){return e._worker.withSyncedResources(monaco.editor.getModels().filter(function(t){return t.getModeId()===e._modeId}).map(function(e){return e.uri}))})),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return function(e){var t,n,o=new m(function(e,o){t=e,n=o},function(){});return e.then(t,n),o}(this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e}))},e}();var g=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=monaco.Uri,d=monaco.Promise,h=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,t){var n=this._offsetToPosition(e,t.start),o=this._offsetToPosition(e,t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:o.lineNumber,endColumn:o.column}},e}(),v=function(e){function t(t,n,o){var r=e.call(this,o)||this;r._defaults=t,r._selector=n,r._disposables=[],r._listener=Object.create(null);var i=function(e){if(e.getModeId()===n){var t,o=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri)},500)});r._listener[e.uri.toString()]={dispose:function(){o.dispose(),clearTimeout(t)}},r._doValidate(e.uri)}},a=function(e){monaco.editor.setModelMarkers(e,r._selector,[]);var t=e.uri.toString();r._listener[t]&&(r._listener[t].dispose(),delete r._listener[t])};return r._disposables.push(monaco.editor.onDidCreateModel(i)),r._disposables.push(monaco.editor.onWillDisposeModel(a)),r._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){a(e.model),i(e.model)})),r._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}}),r._disposables.push(r._defaults.onDidChange(function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),i(n)}})),monaco.editor.getModels().forEach(i),r}return g(t,e),t.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},t.prototype._doValidate=function(e){var t=this;this._worker(e).then(function(n){if(!monaco.editor.getModel(e))return null;var o=[],r=t._defaults.getDiagnosticsOptions(),i=r.noSyntaxValidation,a=r.noSemanticValidation;return i||o.push(n.getSyntacticDiagnostics(e.toString())),a||o.push(n.getSemanticDiagnostics(e.toString())),d.join(o)}).then(function(n){if(!n||!monaco.editor.getModel(e))return null;var o=n.reduce(function(e,t){return t.concat(e)},[]).map(function(n){return t._convertDiagnostics(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t._selector,o)}).done(void 0,function(e){console.error(e)})},t.prototype._convertDiagnostics=function(e,t){var n=this._offsetToPosition(e,t.start),o=n.lineNumber,i=n.column,a=this._offsetToPosition(e,t.start+t.length),s=a.lineNumber,c=a.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:o,startColumn:i,endLineNumber:s,endColumn:c,message:r.i(t.messageText,"\n")}},t}(h),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,o){e.getWordUntilPosition(n);var r=e.uri,i=this._positionToOffset(r,n);return K(o,this._worker(r).then(function(e){return e.getCompletionsAtPosition(r.toString(),i)}).then(function(e){if(e)return e.entries.map(function(e){return{uri:r,position:n,label:e.name,sortText:e.sortText,kind:t.convertKind(e.kind)}})}))},t.prototype.resolveCompletionItem=function(e,n){var o=this,i=e,a=i.uri,s=i.position;return K(n,this._worker(a).then(function(e){return e.getCompletionEntryDetails(a.toString(),o._positionToOffset(a,s),i.label)}).then(function(e){return e?{uri:a,position:s,label:e.name,kind:t.convertKind(e.kind),detail:r.h(e.displayParts),documentation:r.h(e.documentation)}:i}))},t.convertKind=function(e){switch(e){case T.primitiveType:case T.keyword:return monaco.languages.CompletionItemKind.Keyword;case T.variable:case T.localVariable:return monaco.languages.CompletionItemKind.Variable;case T.memberVariable:case T.memberGetAccessor:case T.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case T.function:case T.memberFunction:case T.constructSignature:case T.callSignature:case T.indexSignature:return monaco.languages.CompletionItemKind.Function;case T.enum:return monaco.languages.CompletionItemKind.Enum;case T.module:return monaco.languages.CompletionItemKind.Module;case T.class:return monaco.languages.CompletionItemKind.Class;case T.interface:return monaco.languages.CompletionItemKind.Interface;case T.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},t}(h),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return g(t,e),t.prototype.provideSignatureHelp=function(e,t,n){var o=this,i=e.uri;return K(n,this._worker(i).then(function(e){return e.getSignatureHelpItems(i.toString(),o._positionToOffset(i,t))}).then(function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]};return e.items.forEach(function(e){var n={label:"",documentation:null,parameters:[]};n.label+=r.h(e.prefixDisplayParts),e.parameters.forEach(function(t,o,i){var a=r.h(t.displayParts),s={label:a,documentation:r.h(t.documentation)};n.label+=a,n.parameters.push(s),o<i.length-1&&(n.label+=r.h(e.separatorDisplayParts))}),n.label+=r.h(e.suffixDisplayParts),t.signatures.push(n)}),t}}))},t}(h),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideHover=function(e,t,n){var o=this,i=e.uri;return K(n,this._worker(i).then(function(e){return e.getQuickInfoAtPosition(i.toString(),o._positionToOffset(i,t))}).then(function(e){if(e){var t=r.h(e.documentation),n=e.tags?e.tags.map(function(e){var t="*@"+e.name+"*";return e.text?t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):t}).join("  \n\n"):"",a=r.h(e.displayParts);return{range:o._textSpanToRange(i,e.textSpan),contents:[{value:a},{value:t+(n?"\n\n"+n:"")}]}}}))},t}(h),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){var o=this,r=e.uri;return K(n,this._worker(r).then(function(e){return e.getOccurrencesAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e)return e.map(function(e){return{range:o._textSpanToRange(r,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})}))},t}(h),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDefinition=function(e,t,n){var o=this,r=e.uri;return K(n,this._worker(r).then(function(e){return e.getDefinitionAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n],a=f.parse(i.fileName);monaco.editor.getModel(a)&&t.push({uri:a,range:o._textSpanToRange(a,i.textSpan)})}return t}}))},t}(h),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideReferences=function(e,t,n,o){var r=this,i=e.uri;return K(o,this._worker(i).then(function(e){return e.getReferencesAtPosition(i.toString(),r._positionToOffset(i,t))}).then(function(e){if(e){for(var t=[],n=0,o=e;n<o.length;n++){var i=o[n],a=f.parse(i.fileName);monaco.editor.getModel(a)&&t.push({uri:a,range:r._textSpanToRange(a,i.textSpan)})}return t}}))},t}(h),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentSymbols=function(e,t){var n=this,o=e.uri;return K(t,this._worker(o).then(function(e){return e.getNavigationBarItems(o.toString())}).then(function(e){if(e){var t=function(e,r,i){var a={name:r.text,kind:I[r.kind]||monaco.languages.SymbolKind.Variable,location:{uri:o,range:n._textSpanToRange(o,r.spans[0])},containerName:i};if(r.childItems&&r.childItems.length>0)for(var s=0,c=r.childItems;s<c.length;s++){var u=c[s];t(e,u,a.name)}e.push(a)},r=[];return e.forEach(function(e){return t(r,e)}),r}}))},t}(h),T=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),I=Object.create(null);I[T.module]=monaco.languages.SymbolKind.Module,I[T.class]=monaco.languages.SymbolKind.Class,I[T.enum]=monaco.languages.SymbolKind.Enum,I[T.interface]=monaco.languages.SymbolKind.Interface,I[T.memberFunction]=monaco.languages.SymbolKind.Method,I[T.memberVariable]=monaco.languages.SymbolKind.Property,I[T.memberGetAccessor]=monaco.languages.SymbolKind.Property,I[T.memberSetAccessor]=monaco.languages.SymbolKind.Property,I[T.variable]=monaco.languages.SymbolKind.Variable,I[T.const]=monaco.languages.SymbolKind.Variable,I[T.localVariable]=monaco.languages.SymbolKind.Variable,I[T.variable]=monaco.languages.SymbolKind.Variable,I[T.function]=monaco.languages.SymbolKind.Function,I[T.localFunction]=monaco.languages.SymbolKind.Function;var x,P,A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:r.b.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(h),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,o){var r=this,i=e.uri;return K(o,this._worker(i).then(function(e){return e.getFormattingEditsForRange(i.toString(),r._positionToOffset(i,{lineNumber:t.startLineNumber,column:t.startColumn}),r._positionToOffset(i,{lineNumber:t.endLineNumber,column:t.endColumn}),A._convertOptions(n))}).then(function(e){if(e)return e.map(function(e){return r._convertTextChanges(i,e)})}))},t}(A),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,o,r){var i=this,a=e.uri;return K(r,this._worker(a).then(function(e){return e.getFormattingEditsAfterKeystroke(a.toString(),i._positionToOffset(a,t),n,A._convertOptions(o))}).then(function(e){if(e)return e.map(function(e){return i._convertTextChanges(a,e)})}))},t}(A);function K(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}function j(e){P=M(e,"typescript",o.TypeScript)}function N(e){x=M(e,"javascript",o.EcmaScript5)}function F(){return new monaco.Promise(function(e,t){if(!x)return t("JavaScript not registered!");e(x)})}function L(){return new monaco.Promise(function(e,t){if(!P)return t("TypeScript not registered!");e(P)})}function M(e,t,n){var o=new p(t,e),r=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return o.getLanguageServiceWorker.apply(o,[e].concat(t))};return monaco.languages.registerCompletionItemProvider(t,new y(r)),monaco.languages.registerSignatureHelpProvider(t,new b(r)),monaco.languages.registerHoverProvider(t,new S(r)),monaco.languages.registerDocumentHighlightProvider(t,new _(r)),monaco.languages.registerDefinitionProvider(t,new C(r)),monaco.languages.registerReferenceProvider(t,new k(r)),monaco.languages.registerDocumentSymbolProvider(t,new w(r)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new O(r)),monaco.languages.registerOnTypeFormattingEditProvider(t,new D(r)),new v(e,t,r),monaco.languages.setLanguageConfiguration(t,E),monaco.languages.setTokensProvider(t,i(n)),r}n.d(t,"setupTypeScript",function(){return j}),n.d(t,"setupJavaScript",function(){return N}),n.d(t,"getJavaScriptWorker",function(){return F}),n.d(t,"getTypeScriptWorker",function(){return L});var E={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:monaco.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:monaco.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:monaco.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:monaco.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}}}}]);