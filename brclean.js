function brClean (value) {
  if(typeof(value) === 'string')
    return value.replace(/<br\/>|<br>|<\/br>/g , ' ').replace(/\s+/g, ' ');
  else if (Array.isArray(value)) {
    let newValue = []
      for(let i = 0, l = value.length; i < l ; i++) {
        newValue.push( brClean(value[i]) )
      }
    return newValue 
  } else {
    return value
  }
}