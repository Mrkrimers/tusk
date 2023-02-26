// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->


const str = ` <div class="123">
<ul>

<li></li>
<li></li>
<!-- <li>fef2</li> -->

</ul>
<!-- <div class="321">fqef</div> -->
<!-- <a href="dd1"></a> -->
</div>`;

function deleteComment(str_) {
    try {
        if (!/^[<!-- ]{5}[a-zA-Z0-9<>\ \=\"\/\!\@\#\$\%\^\&\{\}]+[ -->]{4}/gm.test(str_)) throw new Error('что-то не так')

        let deleteC = str_.replaceAll(/^[<!-- ]{5}[a-zA-Z0-9\<\>\ \=\"\/\!\@\#\$\%\^\&\{\}]+[ -->]{4}/gm, '')

        return deleteC

    } catch (error) { return error.message }
}


const result = deleteComment(str)
console.log(result);
















