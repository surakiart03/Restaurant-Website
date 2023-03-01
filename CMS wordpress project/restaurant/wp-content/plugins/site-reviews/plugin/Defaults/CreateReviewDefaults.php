<?php

namespace GeminiLabs\SiteReviews\Defaults;

use GeminiLabs\SiteReviews\Defaults\DefaultsAbstract as Defaults;

class CreateReviewDefaults extends Defaults
{
    /**
     * @return array
     */
    public $mapped = [
        '_post_id' => 'post_id',
        '_referer' => 'referer',
        'assign_to' => 'assigned_posts', // support custom assign_to fields
        'category' => 'assigned_terms', // support custom category fields
        'author' => 'name',
        'pinned' => 'is_pinned',
    ];

    /**
     * @return array
     */
    public $sanitize = [
        'assigned_posts' => 'array-int',
        'assigned_terms' => 'array-int',
        'assigned_users' => 'array-int',
        'avatar' => 'url',
        'content' => 'text-multiline',
        'custom' => 'array',
        'date' => 'date',
        'email' => 'user-email',
        'form_id' => 'int',
        'ip_address' => 'text',
        'is_pinned' => 'bool',
        'name' => 'user-name',
        'post_id' => 'int',
        'rating' => 'int',
        'referer' => 'text',
        'response' => 'text',
        'title' => 'text',
        'type' => 'text',
        'url' => 'url',
    ];

    /**
     * @return array
     */
    protected function defaults()
    {
        return [
            'assigned_posts' => [],
            'assigned_terms' => [],
            'assigned_users' => [],
            'avatar' => '',
            'content' => '',
            'custom' => [],
            'date' => '',
            'email' => '',
            'form_id' => '',
            'ip_address' => '',
            'is_pinned' => '',
            'name' => '',
            'post_id' => '',
            'rating' => '',
            'referer' => '',
            'response' => '',
            'title' => '',
            'type' => '',
            'url' => '',
        ];
    }
}
