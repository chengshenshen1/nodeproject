/**
 * Created by chengshenshen on 17-5-14.
 */
var Broeser = require('zombie');
var assert = require('chai').assert;

var browser;

suite('Cross-Page Tests',function () {
    setup(function () {
        browser =new browser();
    });
    test('requesting a group rate quote from the hood river tour page' +
        'should populate the referrer field',function (done) {
        var referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer,function () {
            browser.clickLink('.requestGroupRate',function () {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('requesting a group rate quote from the hood river tour page' +
        'should populate the referrer field',function (done) {
        var referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer,function () {
            browser.clickLink('.requestGroupRate',function () {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('requesting a group rate quote from the hood river tour page' +
        'should populate the referrer field',function (done) {
        var referrer = 'http://localhost:3000/tours/request-group-rate';
        browser.visit(referrer,function () {
            browser.clickLink('.requestGroupRate',function () {
                assert(browser.field('referrer').value === '');
                done();
            });
        });
    });
});

