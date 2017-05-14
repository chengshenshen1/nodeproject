/**
 * Created by chengshenshen on 17-5-14.
 */
suite('Global Test',function () {
    test('page has a valid title',function () {
        assert(document.tittle && document.title.match(/\s/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});