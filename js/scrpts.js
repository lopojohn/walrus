function capitalize_Words(str)
{
 return str.replace( function(txt){return txt.charAt(0).toUpperCase();});
}
prompt(capitalize_Words('js'));
